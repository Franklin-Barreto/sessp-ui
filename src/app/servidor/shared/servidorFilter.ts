/**
 * Created by fpbarreto on 30/10/2017.
 */
export class ServidorFilter {

  private _nome: string;
  private _cpf: string;
  private _rsCodigo: number;
  private _uaCodigo: number;
  private _page: number = 0;
  private _size: number = 3;

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get rsCodigo(): number {
    return this._rsCodigo;
  }

  set rsCodigo(rsCodigo: number) {
    this._rsCodigo = rsCodigo;
  }

  get uaCodigo(): number {
    return this._uaCodigo;
  }

  set uaCodigo(uaCodigo: number) {
    this._uaCodigo = uaCodigo;
  }

  get page() {
    return this._page;
  }

  set page(page: number) {
    this._page = page;
  }

  set size(size: number) {
    this._size = size;
  }

  get size() {
    return this._size;
  }
}
