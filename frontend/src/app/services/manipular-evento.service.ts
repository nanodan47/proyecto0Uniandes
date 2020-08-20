import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { events } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class ManipularEventoService {
  myApUrl = 'http://172.24.98.142:8000/'
  //myApUrl = 'http://localhost:8000/'
  myApiUrl = 'api/events/'

  constructor(private http: HttpClient) { }

  eliminarEvento(id: String, headers : HttpHeaders){

    
    return this.http.delete(this.myApUrl + this.myApiUrl + id, { headers} ).toPromise()
    .then(data  => {

    })
  }
}
