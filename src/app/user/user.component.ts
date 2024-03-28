import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../Core/Interfaces/user';
import { UsuarioService } from '../Core/Services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  usuario: User;
  userId: number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuarioService.obtenerElemento().subscribe(
      data => {
        this.usuario = data;
        console.log(this.usuario);
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

}
