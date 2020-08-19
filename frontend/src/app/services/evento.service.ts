import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {events} from '../models/evento'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  myApUrl = 'http://127.0.0.1:8000/'
  myApiUrl = 'api/events/'
  listaEventos: events [];

  constructor(private http:HttpClient) { }
  
  guardarEvento(evento: events, headers: HttpHeaders): Observable<events>{
    return this.http.post<events>(this.myApUrl + this.myApiUrl, evento, {headers} )
  }

  obtenerEventos(headers : HttpHeaders){
    this.http.get(this.myApUrl + this.myApiUrl, { headers }).toPromise()
    .then(data  => {
      this.listaEventos = data as events[];
    })
  }
}


