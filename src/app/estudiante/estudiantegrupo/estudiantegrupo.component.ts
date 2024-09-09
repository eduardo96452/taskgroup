import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { verestudiantesgrupo  } from '../../interface/grupoestudiante';
import { grupoestudiante } from '../../services/grupoestudiante.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-estudiantegrupo',
  standalone: true,
  imports: [],
  templateUrl: './estudiantegrupo.component.html',
  styleUrl: './estudiantegrupo.component.css'
})
export class EstudiantegrupoComponent implements OnInit {
  usuario: string = '';
  correo: string = '';
  id_estudiante: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private servicioestudiante: grupoestudiante,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.usuario = user.names;
      this.correo = user.email;
      this.id_estudiante = user.user_id;
      console.log(user.email); // Mostrar el correo
      console.log(user.names); // Mostrar el nombre
      console.log(user.user_id);
      this.servicioestudiante.grupoestudiante(user.user_id as verestudiantesgrupo)
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
    }

    
  }

    // Función para borrar el localStorage
    clearLocalStorage() {
      localStorage.clear();  // Limpia todo el localStorage
      console.log('localStorage ha sido borrado');
    }
    
}
