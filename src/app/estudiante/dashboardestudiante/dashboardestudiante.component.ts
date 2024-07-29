import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardestudiante',
  standalone: true,
  imports: [],
  templateUrl: './dashboardestudiante.component.html',
  styleUrl: './dashboardestudiante.component.css'
})
export class DashboardestudianteComponent {
    // Variable para almacenar la fecha actual en formato YYYY-MM-DD
  currentDate: string;

  constructor() {
    // Obtener la fecha actual
    const today = new Date();
    // Formatear la fecha en formato YYYY-MM-DD
    this.currentDate = today.toISOString().split('T')[0];
  }
}
