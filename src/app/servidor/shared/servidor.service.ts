import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {BaseService} from "../../utils/base.service";
import {Servidor} from "./servidor";

@Injectable()
export class ServidorService extends BaseService {

  private servidores: Array<Servidor> = new Array();

  getServidores(servidor:Servidor): Observable<Array<Servidor>> {

    //const params = new HttpParams();


    return this.httpGet<Observable<Servidor>>("servidor").map(
      resp => {
        resp.forEach(servidor => {
          servidor.infoServidor.forEach(info => {
            let unidade: any = info.unidade != null ? info.unidade : '';
            this.servidores.push(new Servidor(servidor.nome, servidor.cpf, servidor.rsCodigo, info.pvCodigo,
              info.exCodigo, unidade.uoCodigo, unidade.uoDescricao, unidade.udCodigo, unidade.udDescricao,
              unidade.uaCodigo, unidade.uaDescricao, info.cargo))
          })
        })
        return this.servidores;
      }
    ).catch((error) => {
      return Observable.throw('Erro' + error);
    })
  }

}
