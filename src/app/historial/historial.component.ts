import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { NotificationService } from '../Core/Services/notification.service';
import { HistorialService } from '../Core/Services/historial.service';
import { Sensor } from '../Core/Interfaces/sensor';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SharedService } from '../shared-service.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{
  @ViewChild('lineChart') private chartRef: ElementRef;
  id: string;
  nombre: string;
  historial: Sensor[] = [];
  lineChart: any;
  loading = true;

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
        this.createChart();
        this.stopLoading();
      }, 
      error => {

      }
    );
  }

  createChart(): void {
    const hours = this.historial.map(item => {
      const dateTimeParts = item.date_time.split(' '); // Divide la fecha y la hora
      return dateTimeParts[1]; // Retorna solo la hora
    });

    const dataValues = this.historial.map(item => {
      if (item.data === 'No Se Detecta Gas') {
        return 0;
      } else if (item.data === 'Gas Detectado') {
        return 1;
      } else {
        return item.data;
      }
    });

    this.lineChart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [
          {
            label: 'Data',
            data: dataValues,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  

  goToRoom() {
    this.router.navigate(['/habitaciones/habitacion/', this.id]);
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
