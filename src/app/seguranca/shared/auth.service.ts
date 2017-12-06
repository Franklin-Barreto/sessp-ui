import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {BaseService} from "../../utils/base.service";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthService extends BaseService {

  jwtPayload: any;

  constructor(private jwt: JwtHelper, protected http: HttpClient) {
    super(http);
    this.carregaToken();
  }


  login(cpf: string, senha: string): Observable<void> {
    let body: string = `username=${cpf}&password=${senha}&grant_type=password`;
    //this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpPost('oauth/token', body).map(resp => {
      this.armazenarToken(resp.access_token);
      console.log(this.jwtPayload);
    }).catch((error) => {
      return Observable.throw(error);
    })
  }


  private armazenarToken(token: string) {
    this.jwtPayload = this.jwt.decodeToken(token);

    localStorage.setItem("token", token);
  }

  public obterToken(): string {
    let token = null;
    if (localStorage.length > 0) {
      token = localStorage.getItem("token");
    }
    return token;
  }

  private carregaToken() {
    let token = this.obterToken();
    if ((token != null) && (token != 'null')) {
      this.armazenarToken(token);
    }
  }

  public obterNovoToken() {
    //this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = 'grant_type=refresh_token';

    return this.httpPost('oauth/token', body).map(resp => {
      this.armazenarToken(resp.access_token);
      return resp;
    }).catch((error) => {
      return Observable.throw(error);
    })
  }

  public isAuthenticated(): boolean {
    let token = this.obterToken();
    return tokenNotExpired(null, token);
  }

  public isAccessTokenInvalid() {
    let token = localStorage.getItem('token');
    return !token || this.jwt.isTokenExpired(token);
  }
}
