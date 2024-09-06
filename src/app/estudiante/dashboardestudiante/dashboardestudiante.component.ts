import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-dashboardestudiante',
  standalone: true,
  imports: [],
  templateUrl: './dashboardestudiante.component.html',
  styleUrl: './dashboardestudiante.component.css'
})
export class DashboardestudianteComponent implements OnInit {
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
    this.getTimeForCountry('America/Guayaquil');

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

  // Función para borrar el localStorage
  clearLocalStorage() {
    localStorage.clear();  // Limpia todo el localStorage
    console.log('localStorage ha sido borrado');
  }
}