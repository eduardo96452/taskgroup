import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboarddocente',
  standalone: true,
  imports: [],
  templateUrl: './dashboarddocente.component.html',
  styleUrl: './dashboarddocente.component.css'
})
export class DashboarddocenteComponent {
  // Variable para almacenar la fecha actual en formato YYYY-MM-DD
  currentDate: string;

  constructor() {
    // Obtener la fecha actual
    const today = new Date();
    // Formatear la fecha en formato YYYY-MM-DD
    this.currentDate = today.toISOString().split('T')[0];
  }
}
