import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaEstudiante, traermensaje } from '../interface/encuesta';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class estudianteService {

    constructor(private http: HttpClient) {}

    enviarRespuestas(credential: RespuestaEstudiante): Observable<traermensaje> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // const body = { email, password };

        return this.http.post<traermensaje>(`${config.apiUrl}/chat`, credential, {
        headers,
        });
    }

}