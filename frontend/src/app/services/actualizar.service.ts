import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { events } from '../models/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  myApUrl = 'http://172.24.98.142:8000/'
  myApiUrl = 'api/events/'

  constructor(private http:HttpClient) { }

  actualizarEvento(evento: events, headers: HttpHeaders, idEvento: String): Observable<events>{
    console.log(evento);
    
    return this.http.put<events>(this.myApUrl + this.myApiUrl + idEvento, evento, {headers} )
  }
}
