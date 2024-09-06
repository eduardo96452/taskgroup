import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { crearusuario, traermensaje } from '../interface/registrouser';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class userregisterService {
// private apiUrl = 'http://localhost:3000/api'; // URL de tu API backend

constructor(private http: HttpClient) {}

registerUser(credential: crearusuario): Observable<traermensaje> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // const body = { email, password };

  return this.http.post<traermensaje>(`${config.apiUrl}/registerUser`, credential, {
    headers,
  });
}

// Otras funciones para llamados a la API pueden ir aquí
}