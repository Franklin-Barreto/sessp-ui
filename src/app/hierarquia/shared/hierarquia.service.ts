import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import {BaseService} from "../../utils/base.service";
import {Avaliador} from "./avaliador";
import {Avaliado} from "./avaliado";

@Injectable()
export class HierarquiaService extends BaseService {

  avaliadores: Array<Avaliador> = new Array();
  avaliados: Array<Avaliado> = new Array();

  getAvaliadores(): Observable<Array<Avaliador>> {
    return this.httpGet<Observable<Avaliador>>("hierarquia/avaliador").map(resp => {

      resp.forEach(avaliador => {
        avaliador.avaliados.forEach(avaliado => {
          this.avaliados.push(new Avaliado(avaliado.nome, avaliado.usuarioId.rsCodigo, avaliado.usuarioId.pvCodigo, avaliado.usuarioId.exCodigo));
        })
        this.avaliadores.push(new Avaliador(avaliador.nome, avaliador.usuarioId.rsCodigo, avaliador.usuarioId.pvCodigo, avaliador.usuarioId.exCodigo, avaliador.usuarioId.uaCodigo, this.avaliados))
      })
      return this.avaliadores;
    }).catch((error) => {
      return Observable.throw('Erro' + error);
    })
  }
}
