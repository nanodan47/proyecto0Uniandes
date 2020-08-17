import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {events} from '../models/evento'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  myApUrl = ''
  myApiUrl = 'api/events/'
  constructor(private http:HttpClient) { }

  guardarEvento(evento: events): Observable<events>{
    return this.http.post<events>(this.myApUrl + this.myApiUrl, evento)
  }
}


