import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listausuario',
  standalone: true,
  imports: [],
  templateUrl: './listausuario.component.html',
  styleUrl: './listausuario.component.css'
})
export class ListausuarioComponent implements OnInit {
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
}
