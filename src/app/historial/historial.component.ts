import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { NotificationService } from '../Core/Services/notification.service';
import { HistorialService } from '../Core/Services/historial.service';
import { Sensor } from '../Core/Interfaces/sensor';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
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
