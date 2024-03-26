import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  estado= 'Todas';

  habitaciones = [
    { numero: 1, nombre: 'Habitación 1', status: 'Activa' },
    { numero: 2, nombre: 'Habitación 2', status: 'Desactiva' },
    { numero: 3, nombre: 'Habitación 3', status: 'Activa' },
    { numero: 4, nombre: 'Habitación 4', status: 'Desactiva' },
    { numero: 5, nombre: 'Habitación 5', status: 'Activa'},
    { numero: 6, nombre: 'Habitación 6', status: 'Desactiva' }
  ];

   habitacionesFiltradas() {
    if (this.estado === 'Activa') {
      return this.habitaciones.filter(h => h.status === 'Activa');
      console.log('Activas');
    } else if (this.estado === 'Desactiva') {
      return this.habitaciones.filter(h => h.status === 'Desactiva');
      console.log('Desactivas');
    } else {
      return this.habitaciones;
      console.log('Todas');
    }
  }

}
