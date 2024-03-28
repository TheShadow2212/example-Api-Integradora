import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../Interfaces/habitacion';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  private apiUrl = `${environment.API_BASE_URL}/habitaciones`;

  constructor(private http: HttpClient) { }

  obtenerElemento(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.apiUrl);
  }
}
