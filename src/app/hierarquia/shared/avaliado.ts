export class Avaliado {

  private _nome: string;
  private _rsCodigo: number;
  private _pvCodigo: number;
  private _exCodigo: number


  constructor(nome: string, rsCodigo: number, pvCodigo: number, exCodigo: number) {
    this._nome = nome;
    this._rsCodigo = rsCodigo;
    this._pvCodigo = pvCodigo;
    this._exCodigo = exCodigo
  }

  get nome(): string {
    return this._nome;
  }

  get rsCodigo(): number {
    return this._rsCodigo;
  }

  get pvCodigo(): number {
    return this._pvCodigo;
  }

  get exCodigo(): number {
    return this._exCodigo;
  }
}
