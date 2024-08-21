import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginI, UserLogin } from '../interface/auth';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/api'; // URL de tu API backend

  constructor(private http: HttpClient) {}

  login(credential: loginI): Observable<UserLogin> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = { email, password };

    return this.http.post<UserLogin>(`${config.apiUrl}/login`, credential, {
      headers,
    });
  }
  // Otras funciones para llamados a la API pueden ir aquí
}
