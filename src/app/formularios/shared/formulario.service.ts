import {Injectable} from '@angular/core';
import {BaseService} from "../../utils/base.service";
import {Observable} from "rxjs/Observable";
import {Formulario} from "./formulario";
import {ServidorService, Servidor} from "../../servidor"


@Injectable()
export class FormularioService extends BaseService {



  getFormularioPorCodigo(codigo: number): Observable<Formulario> {
    return this.httpGet("formulario/" + codigo)
      .map(resp => {
        return resp;
      })
  }
}
