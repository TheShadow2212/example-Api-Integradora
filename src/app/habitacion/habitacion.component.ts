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
import pusherJs from 'pusher-js'
import { interval, Subscription } from 'rxjs';
import { SharedService } from '../shared-service.service';

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
  alarma: boolean;

  sensor_temperatura: Sensor[] = [];
  sensor_humo: Sensor[] = [];
  sensor_voltaje: Sensor[] = [];
  sensor_humedad: Sensor[] = [];
  sensor_luz: Sensor[] = [];
  sensor_infrarrojo: Sensor[] = [];
  sensor_magnetico: Sensor[] = [];

  sensores_sq3 : Sensor[] = [];
  sensores_sq4 : Sensor[] = [];
  sensores_sq5 : Sensor[] = [];

  loading = true;
  pusher: any;
  private update: Subscription;

  private sensorDataSubscription: Subscription;

  constructor(private sensorService : SensorService, private notificationService : NotificationService, private habitacionSerive : HabitacionesService, private route: ActivatedRoute, private router: Router, private ss: SharedService) 
  {
    this.update = this.ss.dataUpdated$.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.iniciarPusher();
    this.obtenerDatos();
    this.obtenerNotificaciones();
    if (this.sensorDataSubscription) {
      this.sensorDataSubscription.unsubscribe();
    }
    this.sensorDataSubscription = interval(4000).subscribe(() => this.obtenerSensorData());
  }

  ngOnDestroy() {
    if (this.sensorDataSubscription) {
      this.sensorDataSubscription.unsubscribe();
      this.update.unsubscribe();
    }
    if (this.pusher) {
      this.pusher.disconnect();
    }
  }

  iniciarPusher() {
    this.pusher = new pusherJs('41abcfed77601deb48a5', {
      cluster: 'us3',
      forceTLS: false,
      wsHost: '18.222.122.162',
      wsPort: 6001,
      enabledTransports: ['ws']
    });
    let channel = this.pusher.subscribe('channel-alarma');
    channel.bind('App\\Events\\alarma', (data: any) => {
      console.log(data);
      if (data.id == this.id){
        this.alarma = true;
        if (!this.sensorDataSubscription || this.sensorDataSubscription.closed) {
          this.ngOnInit();
        }
      }
    });
    this.pusher.connection.bind('connected', () => {
      console.log('Conexión establecida');
    });
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElementoPorId(Number(this.id)).subscribe(
      data => {
        this.habitacion = data;
        console.log(this.habitacion);
        if (this.habitacion.alarma == true) {
          this.alarma = true;
        }
        this.stopLoading();
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
        this.notificaciones.reverse();
        console.log(this.notificaciones);
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  obtenerSensorData() {
    console.log('Obteniendo datos de sensores');
    this.sensorService.obtenerElementoPorId(this.id).subscribe(
      data => {
        this.sensores = data;
        this.sensores.forEach(sensor => {
          switch (sensor.name) {
            case "Temperatura":
              this.sensor_temperatura = [sensor];
              break;
            case "Humo":
              this.sensor_humo = [sensor];
              break;
            case "Humedad":
              this.sensor_humedad = [sensor];
              break;
            case "Voltaje":
              this.sensor_voltaje = [sensor];
              break;
            case "FotoResistencia":
              this.sensor_luz = [sensor];
              break;
            case "Infrarrojo":
              this.sensor_infrarrojo = [sensor];
              break;
            default:
              this.sensor_magnetico = [sensor];
              break;
          }
        });
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }
  

  modificarHabitacion() {
    this.router.navigate(['/habitacion/update', this.id]);
  }

  apagar_alarma(){
    this.notificationService.apagarAlarma(Number(this.id)).subscribe(
      data => {
        this.alarma = false;
      },
      error => {
        console.error('Error al apagar la alarma', error);
      }
    );
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
  
}
