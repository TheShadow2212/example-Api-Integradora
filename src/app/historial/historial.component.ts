import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { NotificationService } from '../Core/Services/notification.service';
import { SensorService } from '../Core/Services/sensor.service';
import { HistorialService } from '../Core/Services/historial.service';

import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
import { Notificaction } from '../Core/Interfaces/notificaction';
import { Sensor } from '../Core/Interfaces/sensor';

import { CrudService } from '../Core/Services/crud.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import pusherJs from 'pusher-js'
import { interval, Subscription } from 'rxjs';
import { SharedService } from '../shared-service.service';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  id: string;
  nombre: string;
  historial: Sensor[] = [];

  constructor(private sensorService: HistorialService, private notificationService : NotificationService, private habitacionSerive : HabitacionesService, private route: ActivatedRoute, private router: Router, private ss: SharedService)
  {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.nombre = this.route.snapshot.paramMap.get('nombre')!;
    this.obtenerHistorial(this.id, this.nombre);
  }

  obtenerHistorial(id: string, name: string): void {
    this.sensorService.obtenerHistorial(id, name).subscribe(
      data => {
        console.log(data);
        this.historial = data;
      }, 
      error => {

      }
    );
  }

  goToRoom() {
    this.router.navigate(['/habitaciones/habitacion/', this.id]);
  }
}
