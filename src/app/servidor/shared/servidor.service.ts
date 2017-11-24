import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {BaseService} from "../../utils/base.service";
import {Servidor} from "./servidor";
import {ServidorFilter} from "./servidorFilter";

@Injectable()
export class ServidorService extends BaseService {

  private servidores: Array<Servidor>;

  getServidores(filtro: ServidorFilter): Observable<Array<Servidor>> {

    let parametros = 'size='+filtro.size+'&page='+filtro.page;

    if (filtro.rsCodigo) {
      parametros += "&rsCodigo=" + filtro.rsCodigo;
    }

    if (filtro.nome) {
      parametros += "&nome=" + filtro.nome;
    }

    if (filtro.cpf) {
      parametros += "&cpf=" + filtro.cpf;
    }

    if (filtro.uaCodigo) {
      parametros += "&uaCodigo=" + filtro.uaCodigo;
    }

    return this.httpGet<Observable<any>>("servidor/filtrar", parametros).map(
      resp => {
        this.servidores = new Array();
        resp.content.forEach(servidor => {

          let unidade: any = servidor.infoServidor.unidade != null ? servidor.infoServidor.unidade : '';
          this.servidores.push(new Servidor(servidor.nome, servidor.cpf, servidor._id, servidor.infoServidor.pvCodigo,
            servidor.infoServidor.exCodigo, unidade.uoCodigo, unidade.uoDescricao, unidade.udCodigo, unidade.udDescricao,
            unidade.uaCodigo, unidade.uaDescricao, servidor.infoServidor.cargo))

        })
        let resultado = {
          servidores:this.servidores,
          total:resp.totalElements
        }

        return resultado;
      }
    ).catch((error) => {
      return Observable.throw('Erro' + error);
    })
  }
}
