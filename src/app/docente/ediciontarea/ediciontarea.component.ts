import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ediciontarea',
  standalone: true,
  imports: [],
  templateUrl: './ediciontarea.component.html',
  styleUrl: './ediciontarea.component.css'
})
export class EdiciontareaComponent implements OnInit {
  usuario: string = '';
  correo: string = '';

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

  // Función para borrar el localStorage
  clearLocalStorage() {
    localStorage.clear();  // Limpia todo el localStorage
    console.log('localStorage ha sido borrado');
  }
}
