import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {BaseService} from "../../utils/base.service";
import {UnidadeOrcamentaria} from "./unidade-orcamentaria";
import {UnidadeDespesa} from "./unidade-despesa";

@Injectable()
export class UnidadesService extends BaseService {

  getUos(): Observable<Array<UnidadeOrcamentaria>> {

    return this.httpGet("unidades/uos").map(resp => {
      return resp.json()

    }).catch((error) => {
      return Observable.throw('Erro' + error);
    });
  }

/*  getUdsPorUo(): Observable<Array<UnidadeDespesa>> {
     return this.httpGet("unidades")
  }*/

}
