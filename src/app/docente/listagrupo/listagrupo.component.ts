import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { creargrupo, vergrupo  } from '../../interface/group';
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
  }
  

  onSubmit(): void {
    if (this.groupform.valid) {
      console.log('Datos del formulario que se enviarán:', this.groupform.value);
      
      this.serviciogrupo.login(this.groupform.value as creargrupo)
        .pipe(
          tap((res) => {
            console.log('Respuesta del servidor:', res);
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
            console.log('Datos asignados a groups:', this.groups);  // Verifica que los datos se hayan asignado correctamente
          }
        }),
        catchError((err) => {
          console.log('Parece que hubo un error:', err);
          return of([]);
        })
      )
      .subscribe();
  }

  // Función para borrar el localStorage
  clearLocalStorage() {
    localStorage.clear();  // Limpia todo el localStorage
    console.log('localStorage ha sido borrado');
  }
}
