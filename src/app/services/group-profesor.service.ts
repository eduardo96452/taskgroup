import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { creargrupo, traermensaje, vergrupo, savegroups, mensajedeguardado } from '../interface/group';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GroupProfesorService {
// private apiUrl = 'http://localhost:3000/api'; // URL de tu API backend

constructor(private http: HttpClient) {}

login(credential: creargrupo): Observable<traermensaje> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // const body = { email, password };

  return this.http.post<traermensaje>(`${config.apiUrl}/createGroups`, credential, {
    headers,
  });
}


tablagrupos(): Observable<vergrupo[]> {
  return this.http.get<vergrupo[]>(`${config.apiUrl}/groups`);
}


guardargrupo(credential: savegroups): Observable<mensajedeguardado> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // const body = { email, password };

  return this.http.post<mensajedeguardado>(`${config.apiUrl}/saveGroups`, credential, {
    headers,
  });
}
// Otras funciones para llamados a la API pueden ir aquí
}

