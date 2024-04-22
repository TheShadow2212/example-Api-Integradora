import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Sensor } from '../Interfaces/sensor';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = `${environment.API_BASE_URL}/sensores/`;

  constructor(private http: HttpClient) { }

  obtenerHistorial(id: string, name: string): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiUrl}${id}/${name}`);
  }
}
