import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { NotificationService } from '../Core/Services/notification.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
import { Notificaction } from '../Core/Interfaces/notificaction';
import { CrudService } from '../Core/Services/crud.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule,FormsModule,ConfirmacionEliminacionComponent,SpinnerComponent],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})

export class HabitacionesComponent implements OnInit{
 eliminar = new EventEmitter<number>();
 loading = true;

  constructor(private notificacionService : NotificationService,private habitacionSerive : HabitacionesService, private crud: CrudService, private router: Router) { }
  estado= 'Todas';
  mostrarConfirmacion: boolean = false;
  idElemento: number = 0;

  habitaciones: Habitacion[] = [];
  notificaciones: Notificaction[] = [];

  ngOnInit(): void {
    this.obtenerDatos();
    this.obtenerNotificaciones();
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElemento().subscribe(
      data => {
        this.habitaciones = data;
        this.stopLoading();
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  obtenerNotificaciones() {
    this.notificacionService.obtenerElemento().subscribe(
      data => {
        this.notificaciones = data;
        console.log(this.notificaciones);
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  eliminarElemento(decision: boolean) {
    if (decision) {
      this.emitirEliminar(this.idElemento);
      this.mostrarConfirmacion = false;
    }
    else {
      this.mostrarConfirmacion = false;
    }

  }

  emitirAviso(id: number) {
    this.mostrarConfirmacion = true;
    this.idElemento = id;
  }

  statusNotification(id: number) {
    this.notificacionService.updateNotification(id).subscribe(
      data => {
        this.ngOnInit();
      },
      error => {
        console.error('Error al actualizar notificacion', error);
      }
    );
  }

  emitirEliminar(id: number) {
    this.crud.eliminar('/habitaciones/', id).subscribe(
      data => {
        this.ngOnInit();
      },
      error => {
        console.error('Error al eliminar elemento', error);
      }
    );
  }

   habitacionesFiltradas() {
    if (this.estado === 'Activa') {
      return this.habitaciones.filter(h => h.status === 'Activa');
    } else if (this.estado === 'Desactiva') {
      return this.habitaciones.filter(h => h.status === 'Desactiva');
    } else {
      return this.habitaciones;
    }
  }

  addRoom(){
    this.router.navigate(['/habitacion/create']);
  }

  detailRoom(id: number){
    this.router.navigate(['/habitaciones/habitacion', id]);
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
