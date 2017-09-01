import {Fator} from "./fator";
import {Parametro} from "./parametro";

export class Formulario {

  private _codigo: number;
  private _descricao: string;
  private _fatores: Array<Fator>;
  private _parametros: Array<Parametro>


  constructor(codigo: number, descricao: string, fatores: Array<Fator>, parametros: Array<Parametro>) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._fatores = fatores;
    this._parametros = parametros;
  }

  get codigo(): number {
    return this._codigo;
  }

  get descricao(): string {
    return this._descricao;
  }

  get fatores(): Array<Fator> {
    return this._fatores;
  }

 get parametros(): Array<Parametro> {
    return this._parametros;
  }
}
