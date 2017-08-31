import {UnidadeAdministrativa} from "./unidade-administrativa";
export class UnidadeDespesa {

  private _udCodigo: number;
  private _udDescricao: string;
  private _unidadesAdministrativas: Array<UnidadeAdministrativa>;


  get udCodigo(): number {
    return this._udCodigo;
  }

  get udDescricao(): string {
    return this._udDescricao;
  }

  get unidadesAdministrativas(): Array<UnidadeAdministrativa> {
    return this._unidadesAdministrativas;
  }
}
