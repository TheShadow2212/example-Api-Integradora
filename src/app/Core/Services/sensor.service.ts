import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../Interfaces/sensor';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = `${environment.API_BASE_URL}/sensores/`;

  constructor(private http: HttpClient) { }

  obtenerElementoPorId(id: string): Observable<Sensor[]> {
    const url = this.apiUrl + id;
    return this.http.get<Sensor[]>(url);
  }

}
