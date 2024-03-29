import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionesService } from '../Core/Services/habitaciones.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Habitacion } from '../Core/Interfaces/habitacion';
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
  loading = true;

    constructor(private habitacionSerive : HabitacionesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.habitacionSerive.obtenerElementoPorId(Number(this.id)).subscribe(
      data => {
        this.habitacion = data;
        this.stopLoading();
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
