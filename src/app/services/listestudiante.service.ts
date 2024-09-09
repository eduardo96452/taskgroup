import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { verestudiante } from '../interface/listaestudiante';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class listestudiante {
// private apiUrl = 'http://localhost:3000/api'; // URL de tu API backend

constructor(private http: HttpClient) {}

    tablaestudiantes(): Observable<verestudiante[]> {
        return this.http.get<verestudiante[]>(`${config.apiUrl}/listStudents`);
    }
}