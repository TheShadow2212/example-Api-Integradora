import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-habitaciones-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './habitaciones-update-form.component.html',
  styleUrl: './habitaciones-update-form.component.css'
})
export class HabitacionesUpdateFormComponent {
  status = ['Activa', 'Desactiva'];
  habitacion: any;
  habitacionForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    status: new FormControl('', [Validators.required]),
  });
  idString = this.route.snapshot.paramMap.get('id');
  loading = true;


  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.idString) {
      this.crud.getHabitacion(this.idString).subscribe({
        next: (data) => {
          this.habitacion = data;
          this.stopLoading();
          this.habitacionForm.setValue({
            nombre: this.habitacion.nombre,
            status: this.habitacion.status
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  update() {
    const nombre = this.habitacionForm.value.nombre;
    const status = this.habitacionForm.value.status;

    if (nombre && status && this.idString) {
      console.log(nombre, status);
      this.crud.updateHabitacion(nombre, status, this.idString).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/habitaciones/habitacion/', this.idString]);
        },
        error: error => {
          console.log(error);
        }
      });
  }}

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
