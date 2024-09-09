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
  imports: [CommonModule],
  templateUrl: './estudiantegrupo.component.html',
  styleUrl: './estudiantegrupo.component.css'
})
export class EstudiantegrupoComponent implements OnInit {
  usuario: string = '';
  correo: string = '';
  id_estudiante: number = 0;
  grupos: string[] = [];
  numberOfGroups: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private servicioestudiante: grupoestudiante,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.usuario = user.names;
      this.correo = user.email;
      this.id_estudiante = user.user_id

    // Construir el objeto con el `student_id`
    const formValue = {
      student_id: this.id_estudiante
    };
    
    // Llamada al servicio
    this.servicioestudiante.grupoestudiante(formValue)
    .pipe(
      tap((res: any) => {
        console.log('Respuesta del servidor:', res);

        if (res && res.length > 0) {
          this.numberOfGroups = res[0].number_of_groups;
          // Obtener los nombres de los grupos y separarlos por comas
          this.grupos = res[0].group_names.split(',').map((group: string) => group.trim());

        }
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
