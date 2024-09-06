import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { crearusuario } from '../../interface/registrouser';
import { userregisterService } from '../../services/registrouser.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  // Variable para almacenar la opción seleccionada
  selectedOption: string = 'Seleccione el tipo de usuario a crear';
  mensaje: string = '';  // Inicializado como string vacío
  registerForm: FormGroup;   // Aquí se define el formulario
  
   // Método para actualizar la opción seleccionada
   selectOption(option: string) {
    this.selectedOption = option;
    this.registerForm.patchValue({ user_type: option.toLowerCase() });
  }

  constructor(
    private fb: FormBuilder, private serviciouser: userregisterService, private router: Router
  ) {
      // Inicializar el formulario con los campos
      this.registerForm = this.fb.group({
        names: ['', Validators.required],
        last_names: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        user_type: ['', Validators.required],
        course_id: [1]   // Puedes asignar el valor por defecto del curso o cambiarlo según sea necesario
    });
  }


  // Método para enviar el formulario
  submitForm() {
    if (this.registerForm.valid) {
      // Verifica si las contraseñas coinciden
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      
      if (password !== confirmPassword) {
        window.alert('Las contraseñas no coinciden');
        return;
      }

      // Crear objeto JSON con los datos del formulario
      const jsonData = this.registerForm.value;

      console.log('JSON enviado:', jsonData);

      // Llamar al servicio para registrar al usuario
      this.serviciouser
        .registerUser(jsonData)
        .pipe(
          tap((res) => {
            console.log('Respuesta del servidor:', res);
            window.alert('Se ha registrado con éxito, inicie sesión');

          }),
          catchError((err) => {
            console.log('Error al registrar el usuario:', err);
            window.alert('Hubo un problema al registrar el usuario');
            throw err;
          })
        )
        .subscribe();
    } else {
      window.alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
