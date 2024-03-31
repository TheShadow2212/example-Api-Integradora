import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './usuario-update-form.component.html',
  styleUrl: '../usuario-update-form/usuario-update-form.component.css'
})
export class UsuarioUpdateFormComponent {
  roles: any[] = [];
  usuario: any;
  showPassword = new FormControl(false);
  usuarioForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role_id: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getRoles().subscribe({
      next: (data) => {
        console.log(data);
        this.roles = data;
        console.log(this.roles);
      },
      error: error => {
        console.log(error);
      }
    });
    const idString = this.route.snapshot.paramMap.get('id');
  if (idString) {
    this.crud.getUsuario(idString).subscribe({
      next: (data) => {
        console.log(data);
        this.usuario = data;
        this.usuarioForm.setValue({
          name: this.usuario.name,
          email: this.usuario.email,
          role_id: this.usuario.role_id
        });
      },
      error: error => {
        console.log(error);
      }
    })
  }
  }

  update() {
    const name = this.usuarioForm.value.name;
    const email = this.usuarioForm.value.email;
    const role_id = this.usuarioForm.value.role_id;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (name && email && role_id && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateUsuario(name, email, role_id, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
