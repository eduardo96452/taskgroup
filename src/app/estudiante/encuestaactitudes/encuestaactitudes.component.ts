import { Component, OnInit } from '@angular/core';
import { RespuestaEstudiante } from '../../interface/encuesta';
import { estudianteService } from '../../services/encuesta.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule} from '@angular/forms';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-encuestaactitudes',
  standalone: true,
  imports: [],
  templateUrl: './encuestaactitudes.component.html',
  styleUrl: './encuestaactitudes.component.css'
})
export class EncuestaactitudesComponent implements OnInit {
  usuario: string = '';
  correo: string = '';
  id: string = '';
  answers: { [key: number]: string } = {};
  studentId: number | null = null;  // ID del estudiante

  
  constructor(
    private router: Router, 
    private _formBuilder: FormBuilder,
    private _router: Router,
    private serviciogrupo: estudianteService    
  ) {
    this.getStudentIdFromLocalStorage();
  }

  getStudentIdFromLocalStorage() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.studentId = user.user_id;
    }
  }

  // Función para guardar la respuesta seleccionada
  onAnswerChange(questionNumber: number, selectedAnswer: string) {
    this.answers[questionNumber] = selectedAnswer;
    //console.log(`Pregunta ${questionNumber}: ${selectedAnswer}`);
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
  
  ngOnInit() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.usuario = user.names;
      this.correo = user.email;
      console.log(user.email); // Mostrar el correo
      console.log(user.names); // Mostrar el nombre
      // Puedes acceder a cualquier otra propiedad del usuario
    }
  }

  // Función para procesar el formulario al enviarlo
  submitForm(event: Event) {
    event.preventDefault();  // Previene que la página se recargue

    if (this.studentId === null) {
      console.error("No se encontró el student_id");
      return;
    }

    // Formar el JSON con el student_id, las respuestas y la fecha
    const jsonData = {
      student_id: this.studentId,
      answers: this.answers,
      date_answers: this.getCurrentDateInEcuador()
    };

    console.log("JSON final enviado:", jsonData);

    // Llamar al servicio para enviar la respuesta
    this.serviciogrupo
      .enviarRespuestas(jsonData)
      .pipe(
        tap((res) => {
          // Aquí se muestra la información de la respuesta en la consola
          console.log('Respuesta del servidor:', res);

          // Mostrar la alerta cuando se recibe la respuesta
          window.alert('Respuestas enviadas con éxito');

          // Redirigir al usuario a /dashboardE después de aceptar la alerta
          this.router.navigate(['/dashboardE']);

        }),
        catchError((err) => {
          console.log('Hoo no parece que ha fallado');
          throw err;
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