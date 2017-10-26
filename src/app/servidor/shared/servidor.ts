import {Cargo} from "./cargo";
export class Servidor {
  private _nome: string;
  private _cpf: string;
  private _rsCodigo: number;
  private _pvCodigo: number;
  private _exCodigo: number;
  private _uoCodigo: number;
  private _uoDescricao: string;
  private _udCodigo: number;
  private _udDescricao: string;
  private _uaCodigo: number;
  private _uaDescricao: string;
  private _cargo: Cargo;

  constructor(nome: string, cpf: string, rsCodigo: number, pvCodigo: number,
              exCodigo: number, uoCodigo: number, uoDescricao: string, udCodigo: number,
              udDescricao: string, uaCodigo: number, uaDescricao: string, cargo: Cargo) {
    this._nome = nome;
    this._cpf = cpf;
    this._rsCodigo = rsCodigo;
    this._pvCodigo = pvCodigo;
    this._exCodigo = exCodigo;
    this._uoCodigo = uoCodigo;
    this._uoDescricao = uoDescricao;
    this._udCodigo = udCodigo;
    this._udDescricao = udDescricao;
    this._uaCodigo = uaCodigo;
    this._uaDescricao = uaDescricao;
    this._cargo = cargo;
  }

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
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

  get uoCodigo(): number {
    return this._uoCodigo;
  }

  get uoDescricao(): string {
    return this._uoDescricao;
  }

  get udCodigo(): number {
    return this._udCodigo;
  }

  get udDescricao(): string {
    return this._udDescricao;
  }

  get uaCodigo(): number {
    return this._uaCodigo;
  }

  get uaDescricao(): string {
    return this._uaDescricao;
  }

  getCargo(): Cargo {
    return this._cargo;
  }
}
