import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  update(endpoint: string, id: number, Nombre: string ): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint + id;
    return this.http.put<any>(fullUrl, { Nombre });
  }

  create(endpoint: string, Nombre: string, foreignKey: string = ''): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint
    if (foreignKey != '') {
      return this.http.post<any>(fullUrl, { Nombre, foreignKey });
    }
    return this.http.post<any>(fullUrl, { Nombre });
  }
  
  eliminar(endpoint: string, id: number): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint + id;
    return this.http.delete<any>(fullUrl);
  }

  getPaises(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/paises';
    return this.http.get<any>(url);
  }

  createRegion(Nombre: string, PaisIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones'
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.post<any>(url, { Nombre, PaisID });
  }

  createCiudad(Nombre: string, RegionIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades'
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.post<any>(url, { Nombre, RegionID });
  }

  createDistrito(Nombre: string, CiudadIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos'
    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.post<any>(url, { Nombre, CiudadID });
  }

  createBarrio(Nombre: string, DistritoIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios';
    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.post<any>(url, { Nombre, DistritoID });
  }

  createCalle(Nombre: string, BarrioIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles';
    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.post<any>(url, { Nombre, BarrioID });
  }

  createEdificio(Nombre: string, CalleIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios';
    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.post<any>(url, { Nombre, CalleID });
  }

  updateRegion(Nombre: string, PaisIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones/' + id;
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.put<any>(url, { Nombre, PaisID });
  }

  updateCiudad(Nombre: string, RegionIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades/' + id;
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.put<any>(url, { Nombre, RegionID });
  }

  updateDistrito(Nombre: string, CiudadIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos/' + id;
    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.put<any>(url, { Nombre, CiudadID });
  }

  updateBarrio(Nombre: string, DistritoIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios/' + id;
    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.put<any>(url, { Nombre, DistritoID });
  }
  
  updateCalle(Nombre: string, BarrioIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles/' + id;
    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.put<any>(url, { Nombre, BarrioID });
  }

  updateEdificio(Nombre: string, CalleIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios/' + id;
    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.put<any>(url, { Nombre, CalleID });
  }

  getRegiones(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones';
    return this.http.get<any>(url);
  }

  getCiudades(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades';
    return this.http.get<any>(url);
  }

  getDistritos(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos';
    return this.http.get<any>(url);
  }

  getBarrios(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios';
    return this.http.get<any>(url);
  }

  getCalles(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles';
    return this.http.get<any>(url);
  }
}
