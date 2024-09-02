import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  // Método para obtener la fecha/hora de una zona horaria específica
  getTimeByTimezone(timezone: string): Observable<any> {
    const url = `http://worldtimeapi.org/api/timezone/${timezone}`;
    return this.http.get<any>(url);
  }
}
