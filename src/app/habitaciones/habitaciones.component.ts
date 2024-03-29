import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
import { CrudService } from '../Core/Services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule,FormsModule,ConfirmacionEliminacionComponent],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})

export class HabitacionesComponent implements OnInit{
 eliminar = new EventEmitter<number>();

  constructor(private habitacionSerive : HabitacionesService, private crud: CrudService, private router: Router) { }
  estado= 'Todas';
  mostrarConfirmacion: boolean = false;
  idElemento: number = 0;

  habitaciones: Habitacion[] = [];

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElemento().subscribe(
      data => {
        this.habitaciones = data;
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
    console.log('Detalle de habitacion' + id);
  }

}
