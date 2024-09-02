import { Component } from '@angular/core';

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
  grupos: any = {};  // Inicializado como un objeto vacío

   // Método para actualizar la opción seleccionada
   selectOption(option: string) {
    this.selectedOption = option;
  }



}
