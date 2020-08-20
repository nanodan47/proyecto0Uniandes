import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myApUrl = 'http://172.24.98.142:8000/'
  myApiUrl = 'api/create-user/'
  constructor(private http:HttpClient) { }

  guardarUsuario(usuario: users): Observable<users>{
    return this.http.post<users>(this.myApUrl + this.myApiUrl, usuario)
  }
}