import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";


@Injectable()
export class BaseService {

  private url = 'http://localhost:9000/';

  constructor(protected http: HttpClient) {
  }

  getUrl(): string {
    return this.url;
  }

  httpGet(url: string, parametros?) {

    return this.http.get(this.url + url, {params: new HttpParams({fromString: parametros})});
  }
}
