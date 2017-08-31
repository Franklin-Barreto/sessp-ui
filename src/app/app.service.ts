import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import {} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {UnidadeOrcamentaria} from "./unidades/shared/unidade-orcamentaria";

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  getUos():Observable<Array<UnidadeOrcamentaria>> {

   return  this.http.get("http://localhost:9000/unidades/uos").map(
      (resp) => {
        return resp.json();
      }
    )

  }

}
