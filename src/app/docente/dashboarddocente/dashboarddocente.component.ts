import { Component, OnInit } from '@angular/core';
import { loginI } from '../../interface/auth';
import { AuthService } from '../../services/auth.service';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-dashboarddocente',
  standalone: true,
  imports: [],
  templateUrl: './dashboarddocente.component.html',
  styleUrl: './dashboarddocente.component.css'
})
export class DashboarddocenteComponent implements OnInit {
  // Variable para almacenar la fecha actual en formato YYYY-MM-DD
  currentDate: string = '';
  usuario: string = '';
  correo: string = '';

  constructor(private timeService: TimeService) {
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

  getTimeForCountry(timezone: string) {
    this.timeService.getTimeByTimezone(timezone).subscribe(data => {
      const dateTime = new Date(data.datetime);  // Convierte el string de la API a Date
      this.currentDate = dateTime.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
    }, error => {
      console.error('Error fetching time:', error);
    });
  }
}