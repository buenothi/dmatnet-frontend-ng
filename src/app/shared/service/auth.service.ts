import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenUser } from '../model/tokenUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8080/dmatnet-auth/autenticacao/auth";
  isUsuarioLogado = false;
  token: Observable<TokenUser> | undefined;
  userTokenResult: TokenUser | undefined;

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
    this.token = this.httpClient.post<any>(this.apiUrl, JSON.stringify(login), this.httpOptions);
    this.token.subscribe(result => {
      this.userTokenResult = result
      this.userTokenResult?.type === "Bearer" ? this.isUsuarioLogado = true : this.isUsuarioLogado = false
    })
    return this.token
  }
}
