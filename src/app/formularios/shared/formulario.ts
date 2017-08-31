import {Fator} from "./fator";
export class Formulario {

  private _codigo: number;
  private _descricao: string;
  private _fatores: Array<Fator>;


  constructor(codigo: number, descricao: string, fatores: Array<Fator>) {
    this._codigo = codigo;
    this._descricao = descricao;
    this._fatores = fatores;
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
}
