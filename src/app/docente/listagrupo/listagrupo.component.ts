import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { creargrupo } from '../../interface/group';
import { GroupProfesorService } from '../../services/group-profesor.service';

@Component({
  selector: 'app-listagrupo',
  standalone: true,
  imports: [],
  templateUrl: './listagrupo.component.html',
  styleUrl: './listagrupo.component.css'
})
export class ListagrupoComponent {
  // Variable para almacenar la opción seleccionada
  selectedOption: string = 'Seleccione una materia';
  selectedOption2: string = 'Seleccione un curso';
  selectedOption3: string = 'Seleccione # de miembros';
  

  // Método para actualizar la opción seleccionada
  selectOption(option: string) {
    this.selectedOption = option;
  }

  // Método para actualizar la opción seleccionada
  selectOption2(option2: string) {
    this.selectedOption2 = option2;
  }

  // Método para actualizar la opción seleccionada
  selectOption3(option3: string) {
    this.selectedOption3 = option3;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private serviciogrupo: GroupProfesorService
  ) {}

  
  
  onSubmit() {

    const group = {
      course_id: 1,
      members: 4,
      name_subject: "Matemáticas"
    };

    console.log(group);

    this.serviciogrupo
      .login(group as creargrupo)
      .pipe(
        tap((res) => {
          // Aquí se muestra la información de la respuesta en la consola
          console.log('Respuesta del servidor:', res.grupos);
          console.log('Respuesta del servidor:', res.message);
        }),
        catchError((err) => {
          console.log('Hoo no parece que ha fallado');
          throw err;
        })
      )
      .subscribe();
  }
  
}
