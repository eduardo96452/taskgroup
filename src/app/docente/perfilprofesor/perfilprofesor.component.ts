import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilprofesor',
  standalone: true,
  imports: [],
  templateUrl: './perfilprofesor.component.html',
  styleUrl: './perfilprofesor.component.css'
})
export class PerfilprofesorComponent implements OnInit {
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
