import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenUser } from '../model/tokenUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl = "http://localhost:8080/dmatnet-auth/autenticacao/auth";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { };

  public postLogin(login: any): Observable<TokenUser> {
    return this.httpClient.post<any>(this.apiUrl, JSON.stringify(login), this.httpOptions);
  }
}
