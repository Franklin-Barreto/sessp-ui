import {UnidadeDespesa} from "./unidade-despesa";
export class UnidadeOrcamentaria {
  private _codigoUo: number;
  private _descricao: string;
  private _unidadesDespesa: Array<UnidadeDespesa>;


  constructor(codigoUo: number, descricao: string, unidadesDespesa: Array<UnidadeDespesa>) {
    this._codigoUo = codigoUo;
    this._descricao = descricao;
    this._unidadesDespesa = unidadesDespesa;
  }

  get codigoUo(): number {
    return this._codigoUo;
  }

  get descricao(): string {
    return this._descricao;
  }

  get unidadesDespesa(): Array<UnidadeDespesa> {
    return this._unidadesDespesa;
  }

  addUnidade(unidadeDespesa: UnidadeDespesa) {
    this._unidadesDespesa.push(unidadeDespesa);
  }


}
