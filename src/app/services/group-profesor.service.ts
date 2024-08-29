import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { creargrupo, traermensaje } from '../interface/group';
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

  return this.http.post<traermensaje>(`${config.apiUrl}/createGroup`, credential, {
    headers,
  });
}
// Otras funciones para llamados a la API pueden ir aquí
}