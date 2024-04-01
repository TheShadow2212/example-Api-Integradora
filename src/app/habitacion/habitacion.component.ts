import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { NotificationService } from '../Core/Services/notification.service';
import { SensorService } from '../Core/Services/sensor.service';

import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
import { Notificaction } from '../Core/Interfaces/notificaction';
import { Sensor } from '../Core/Interfaces/sensor';

import { CrudService } from '../Core/Services/crud.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  id: string;
  habitacion: Habitacion;
  notificaciones: Notificaction[] = [];
  sensores: Sensor[] = [];

  loading = true;

    constructor(private sensorService : SensorService, private notificationService : NotificationService, private habitacionSerive : HabitacionesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.obtenerDatos();
    this.obtenerNotificaciones();
    this.obtenerSensorData();
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElementoPorId(Number(this.id)).subscribe(
      data => {
        this.habitacion = data;
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  obtenerNotificaciones() {
    this.notificationService.obtenerElementoPorId(this.id).subscribe(
      data => {
        this.notificaciones = data;
        this.stopLoading();
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  obtenerSensorData() {
    this.sensorService.obtenerElementoPorId(this.id).subscribe(
      data => {
        this.sensores = data;
        console.log(this.sensores);
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }


  modificarHabitacion() {
    this.router.navigate(['/habitacion/update', this.id]);
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
