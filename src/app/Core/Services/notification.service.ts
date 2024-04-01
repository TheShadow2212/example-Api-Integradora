import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notificaction } from '../Interfaces/notificaction';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = `${environment.API_BASE_URL}/notificaciones`;

  constructor(private http: HttpClient) { }

  //Alertas Criticas
  obtenerElemento(): Observable<Notificaction[]> {
    return this.http.get<Notificaction[]>(this.apiUrl);
  }

  //Historial de alertas
  obtenerElementoPorId(id: string): Observable<Notificaction[]> {
    const url = `${environment.API_BASE_URL}/notificaciones/` + id;
    return this.http.get<Notificaction[]>(url);
  }

  //Actualizar alerta critica a leida
  updateNotification( id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/notificaciones/` + id;
    return this.http.put<any>(url, { status: 'read' });
  }

}
