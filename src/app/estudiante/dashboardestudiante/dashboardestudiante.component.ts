import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardestudiante',
  standalone: true,
  imports: [],
  templateUrl: './dashboardestudiante.component.html',
  styleUrl: './dashboardestudiante.component.css'
})
export class DashboardestudianteComponent implements OnInit {
  // Variable para almacenar la fecha actual en formato YYYY-MM-DD
  currentDate: string;
  usuario: string = '';
  correo: string = '';

  constructor() {
    // Obtener la fecha actual
    const today = new Date();
    // Formatear la fecha en formato YYYY-MM-DD
    this.currentDate = today.toISOString().split('T')[0];
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
}