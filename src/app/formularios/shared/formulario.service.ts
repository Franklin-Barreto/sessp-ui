import {Injectable} from '@angular/core';
import {BaseService} from "../../utils/base.service";
import {Observable} from "rxjs";
import {Formulario} from "./formulario";

@Injectable()
export class FormularioService extends BaseService {

  getFormularioPorCodigo(codigo: number): Observable<Formulario> {
    return this.httpGet("formulario/" + codigo)
      .map(resp => {
        return resp.json();
      })
  }
}
