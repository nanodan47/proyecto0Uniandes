import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {login} from '../models/login'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myApUrl = 'http://127.0.0.1:8000/'
  myApiUrl = 'api/api-auth/'
  constructor(private http:HttpClient) { }

  guardarToken(token: login): Observable<login>{
    return this.http.post<login>(this.myApUrl + this.myApiUrl, token)
  }
}

