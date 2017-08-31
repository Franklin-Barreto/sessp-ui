export class UnidadeAdministrativa {

  private _uaCodigo: number;
  private _uaDescricao: string;


  constructor(uaCodigo: number, uaDescricao: string) {
    this._uaCodigo = uaCodigo;
    this._uaDescricao = uaDescricao;
  }

  get uaCodigo(): number {
    return this._uaCodigo;
  }


  get uaDescricao(): string {
    return this._uaDescricao;
  }
}
