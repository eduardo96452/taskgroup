import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { creargrupo, vergrupo, savegroups, traermensaje  } from '../../interface/group';
import { GroupProfesorService } from '../../services/group-profesor.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-listagrupo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './listagrupo.component.html',
  styleUrl: './listagrupo.component.css'
})
export class ListagrupoComponent implements OnInit, AfterViewInit {
  selectedOption3: string = 'Seleccione # de miembros';
  mensaje: string = '';
  grupos: any = {};
  usuario: string = '';
  correo: string = '';
  groupform: FormGroup;
  groups: any[] = [];
  gruposConNombres: { [key: string]: string } = {};
  someGroup: any = {};
  mensajes: string = '';
  listagrupo: any[] = [];
  gruposConNombresID: any = {};  // Puede ser del tipo que sea tu objeto
  gruposConNombresArray: { nombreGrupo: string, miembros: string }[] = [];
  gruposConIDArray: { nombreGrupo: string, miembros: number }[] = [];
  created_teacher: number | null = null;

  selectOption3(value: string): void  {
    this.selectedOption3 = value;
    this.groupform.patchValue({ members: value });
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private serviciogrupo: GroupProfesorService,
    private renderer: Renderer2
  ) {
    this.groupform = this._formBuilder.group({
      course_id: [1],
      members: [null],
      name_subject: ['Matemáticas']
    });

    this.getStudentIdFromLocalStorage();
  }

  getStudentIdFromLocalStorage() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.created_teacher = user.user_id;
    }
  }

  // Función para obtener la fecha actual ajustada a la zona horaria de Ecuador
  getCurrentDateInEcuador() {
    const currentDate = new Date();
    const ecuadorTimeOffset = -5 * 60;  // Ecuador está en UTC-5

    // Ajustamos la fecha a la zona horaria de Ecuador
    const ecuadorDate = new Date(currentDate.getTime() + (ecuadorTimeOffset * 60 * 1000));
    
    // Formateamos la fecha en el formato: YYYY-MM-DD HH:mm:ss+00
    return ecuadorDate.toISOString().slice(0, 19) + "+00";
  }

  onSubmit(): void {
    if (this.groupform.valid) {
      console.log('Datos del formulario que se enviarán:', this.groupform.value);
      
      this.serviciogrupo.login(this.groupform.value as creargrupo)
        .pipe(
          tap((res1) => {
            console.log('Respuesta completa del servidor:', res1);
            // Respuesta esperada: res1.gruposConNombres es un objeto con grupos y miembros
            if (res1 && res1.gruposConNombres) {
              this.gruposConNombresArray = this.procesarGruposConNombres(res1.gruposConNombres);
              this.gruposConNombresID = res1.gruposConNombresID;
            } else {
              console.log('No se encontró gruposConNombres en la respuesta', res1);
            }
        }),
          catchError((err) => {
            console.log('Parece que hubo un error:', err);
            return of(null);
          })
        )
        .subscribe();
    } else {
      console.log('Formulario inválido');
    }
  }
  procesarGruposConNombres(gruposConNombres: any): { nombreGrupo: string, miembros: string }[] {
    // Transforma el objeto en un arreglo de objetos con nombreGrupo y miembros separados por comas
    return Object.keys(gruposConNombres).map(grupo => ({
      nombreGrupo: grupo,
      miembros: gruposConNombres[grupo].split(', ').map((miembro: string) => miembro.trim()) // Divide los miembros por coma y quita espacios
    }));
  }

  ngOnInit(): void  {
    const userData = localStorage.getItem('user');
    
    this.getGroups();

    if (userData) {
      const user = JSON.parse(userData);
      this.usuario = user.names;
      this.correo = user.email;
      console.log(user.email); // Mostrar el correo
      console.log(user.names); // Mostrar el nombre
      // Puedes acceder a cualquier otra propiedad del usuario
    }
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('tablacondiseño');
    if (element) {
      this.renderer.addClass(element, 'custom-class');
    }
  }

  getGroups(): void {
    this.serviciogrupo.tablagrupos()
      .pipe(
        tap((res: vergrupo[]) => {
          console.log('Respuesta del servidor:', res);  // Verifica la respuesta del servidor
          if (res) {
            this.groups = res;  // Asigna los datos a la variable `groups`
          }
        }),
        catchError((err) => {
          console.log('Parece que hubo un error:', err);
          return of([]);
        })
      )
      .subscribe();
  }

  clearLocalStorage() {
    localStorage.clear();  // Limpia todo el localStorage
    console.log('localStorage ha sido borrado');
  }

  submitForm(event: Event) {
    event.preventDefault();

    if (this.created_teacher === null) {
      console.error("No se encontró el student_id");
      return;
    }

    const jsonData: savegroups = {
      subject_id: 1,
      created_teacher: this.created_teacher,
      creation_date: this.getCurrentDateInEcuador(),
      gruposConNombresID: this.gruposConNombresID,
    };

    console.log("JSON final enviado:", jsonData);

    this.serviciogrupo
      .guardargrupo(jsonData)
      .pipe(
        tap((res) => {
          console.log('El grupo fue creado con exito:', res);

          window.alert('El grupo fue creado con exito');

          //this._router.navigate(['/dashboardE']);

        }),
        catchError((err) => {
          console.log('Hoo no parece que ha fallado');
          throw err;
        })
      )
      .subscribe();
  }
}
