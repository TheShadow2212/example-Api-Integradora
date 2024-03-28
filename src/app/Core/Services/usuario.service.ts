import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';
import { environment } from '../../../environments/environment';
import { User } from '../Interfaces/user';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.API_BASE_URL}/usuarios`;
  private apiUrl_detail = `${environment.API_BASE_URL}/usuario`;

  constructor(private http: HttpClient) { }

  obtenerElementos(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }

  obtenerElemento(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl_detail}`, { headers: headers });
  }
}
