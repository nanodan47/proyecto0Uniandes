import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { events } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class ManipularEventoService {
  myApUrl = 'http://127.0.0.1:8000/'
  myApiUrl = 'api/events/'

  constructor(private http: HttpClient) { }

  eliminarEvento(id: String, headers : HttpHeaders): Observable<events>{
    console.log(id);
    
    console.log(this.myApUrl + this.myApiUrl + id);
    
    return this.http.delete<events>(this.myApUrl + this.myApiUrl + id+'dskkjsad', { headers} )
  }
}
