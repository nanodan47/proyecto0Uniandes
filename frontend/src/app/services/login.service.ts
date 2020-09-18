import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {login} from '../models/login'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //myApUrl = 'http://172.24.98.142:8000/'
  myApUrl = 'http://localhost:8000/'
  myApiUrl = 'api/api-auth/'
  constructor(private http:HttpClient) { }

  guardarToken(token: login): Observable<login>{
    return this.http.post<login>(this.myApUrl + this.myApiUrl, token)
  }
}

