import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {verestudiantesgrupo, traermensaje } from '../interface/grupoestudiante';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class grupoestudiante {
// private apiUrl = 'http://localhost:3000/api'; // URL de tu API backend

constructor(private http: HttpClient) {}

grupoestudiante(credential: verestudiantesgrupo): Observable<traermensaje> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // const body = { email, password };

  return this.http.post<traermensaje>(`${config.apiUrl}/infoGroups`, credential, {
    headers,
  });
}
}