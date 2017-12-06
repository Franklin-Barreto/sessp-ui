import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {AuthService} from "../seguranca/shared/auth.service";


@Injectable()
export class BaseService {

  private url = 'http://localhost:9000/';
  protected headers = new HttpHeaders().set('Authorization', 'Basic YW5ndWxhcjp0ZXN0ZQ==').set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(protected http?: HttpClient) {
  }

  getUrl(): string {
    return this.url;
  }

  httpGet(url: string, parametros?) {
    return this.http.get(this.url + url, {params: new HttpParams({fromString: parametros})});
  }

  httpPost(url: string, body: string) {
    return this.http.post(this.url + url, body, {headers: this.headers, withCredentials: true});
  }
}
