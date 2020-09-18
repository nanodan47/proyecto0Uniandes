import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {events} from '../models/evento'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  //myApUrl = 'http://172.24.98.142:8000/'
  myApUrl = 'http://localhost:8000/'
  myApiUrl = 'api/events/'
  listaEventos: events [];
  private actualizarFormulario = new BehaviorSubject<events>({} as any)

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

  actualizarEvento(id: String, evento:events ,headers : HttpHeaders): Observable<events>{
    return this.http.put<events>(this.myApUrl + this.myApiUrl, evento, {headers} )
  }

  actualizar(evento){
    this.actualizarFormulario.next(evento);
  }
  obtenerEvento$():Observable<events>{
    return this.actualizarFormulario.asObservable();
  }
}


