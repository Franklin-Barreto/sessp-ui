import {Injectable} from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class BaseService {

  private url = 'http://localhost:9000/';

  constructor(protected http: Http) {
  }

  getUrl(): string {
    return this.url;
  }

  httpGet(url: string) {
    return this.http.get(this.url + url);
  }

}