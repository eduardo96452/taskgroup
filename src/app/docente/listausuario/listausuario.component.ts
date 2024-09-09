import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { verestudiante, nombreestudiante } from '../../interface/listaestudiante';
import { listestudiante } from '../../services/listestudiante.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-listausuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './listausuario.component.html',
  styleUrl: './listausuario.component.css'
})
export class ListausuarioComponent implements OnInit, AfterViewInit  {
  usuario: string = '';
  correo: string = '';
  estudiantes: any[] = [];
  grupos: string[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private estudiantelista: listestudiante,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
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

  // Función para borrar el localStorage
  clearLocalStorage() {
    localStorage.clear();  // Limpia todo el localStorage
    console.log('localStorage ha sido borrado');
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('estudiantelist');
    if (element) {
      this.renderer.addClass(element, 'custom-class');
    }
  }

  getGroups(): void {
    this.estudiantelista.tablaestudiantes()
      .pipe(
        tap((res: verestudiante[]) => {
          console.log('Respuesta del servidor:', res);
          if (res) {
            this.estudiantes = res;  // Asigna los datos a la variable `estudiantes`
            console.log('Datos asignados a estudiantes:', this.estudiantes);
          }
        }),
        catchError((err) => {
          console.log('Parece que hubo un error:', err);
          return of([]);
        })
      )
      .subscribe();
  }

  
        

  getGruposArray(groups: nombreestudiante): string[] {
    return Object.values(groups);  // Convierte los valores del objeto en un array
  }

  getColorForGroup(grupo: string): string {
    switch (grupo) {
      case 'Equipo Potaxie':
        return 'bg-red-soft text-red';  // Clase para el color rojo
      case 'Equipo Jia Fei':
        return 'bg-green-soft text-green';  // Clase para el color verde
      default:
        return 'bg-blue-soft text-blue';  // Clase por defecto (color azul)
    }
  }

}
