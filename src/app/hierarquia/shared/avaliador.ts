import {Avaliado} from "./avaliado";
export class Avaliador {

  private _nome: string;
  private _rsCodigo: number;
  private _pvCodigo: number;
  private _exCodigo: number;
  private _uaCodigo: number;
  private _avaliados: Array<Avaliado> = new Array();


  constructor(nome: string, rsCodigo: number, pvCodigo: number, exCodigo: number, uaCodigo: number, avaliados: Array<Avaliado>) {
    this._nome = nome;
    this._rsCodigo = rsCodigo;
    this._pvCodigo = pvCodigo;
    this._exCodigo = exCodigo
    this._uaCodigo = uaCodigo;
    this._avaliados = avaliados;
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

  get uaCodigo(): number {
    return this._uaCodigo;
  }

  get avaliados(): Array<Avaliado> {
    return this._avaliados;
  }
}
