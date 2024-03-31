import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../Core/Interfaces/user';
import { UsuarioService } from '../Core/Services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  usuario: User;
  userId: number;
  loading = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuarioService.obtenerElemento().subscribe(
      data => {
        this.usuario = data;
        this.stopLoading();
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  stopLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
