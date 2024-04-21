import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudService } from '../Core/Services/crud.service';
import pusherJs from 'pusher-js';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  rol_user: string = "3";
  pusher: any;

  constructor(private router: Router, private crud: CrudService, private ss: SharedService) { }

  ngOnInit() {
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    this.iniciarPusher();
  }

  ngOnDestroy(): void {
    if (this.pusher) {
      this.pusher.disconnect();
    }
  }

  iniciarPusher() {
    this.pusher = new pusherJs('41abcfed77601deb48a5', {
      cluster: 'us3',
      forceTLS: false,
      wsHost: '18.222.122.162',
      wsPort: 6001,
      enabledTransports: ['ws']
    });
    let channel = this.pusher.subscribe('channel-notifications');
    channel.bind('App\\Events\\CriticalNoti', (data: any) => {
      console.log('Evento recibido:', data);
      this.ss.dataUpdated();
    });
    this.pusher.connection.bind('connected', () => {
      console.log('Conexión establecida');
    });
  }

  @Input() authMessage: string = '';
  @Output() rol = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();
  
  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }
  verificarRol(): void {
    this.rol.emit();
  }
  logout(): void {
    this.logoutEvent.emit();
  }
}
