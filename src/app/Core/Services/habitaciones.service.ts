import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../Interfaces/habitacion';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  private apiUrl = `${environment.API_BASE_URL}/habitaciones`;

  constructor(private http: HttpClient) { }

  obtenerElemento(): Observable<Habitacion[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Habitacion[]>(this.apiUrl, { headers: headers });
  }
}
