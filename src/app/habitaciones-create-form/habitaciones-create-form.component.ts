import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-habitaciones-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './habitaciones-create-form.component.html',
  styleUrl: './habitaciones-create-form.component.css'
})
export class HabitacionesCreateFormComponent {
  status = ['Activa', 'Desactiva'];
  habitacionForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    status: new FormControl('', [Validators.required]),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  create() {
    const nombre = this.habitacionForm.value.nombre;
    const status = this.habitacionForm.value.status;
    const token = localStorage.getItem('token');
    let userid = null;
    if (token){
      let decoded = jwtDecode(token);
      userid = decoded.sub;
    }

    if (nombre && status && userid) {
      console.log(nombre, status, userid);
      this.crud.createHabitacion(nombre, status, userid).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/habitaciones']);
        },
        error: error => {
          console.log(error);
        }
      });
  }}
}
