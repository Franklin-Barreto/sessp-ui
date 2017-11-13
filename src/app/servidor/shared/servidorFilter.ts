/**
 * Created by fpbarreto on 30/10/2017.
 */
class ServidorFilter {

  private _nome: string;
  private _cpf: string;
  private _rsCodigo: number;
  private _uaCodigo: number;

  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  get rsCodigo(): number {
    return this._rsCodigo;
  }

  get uaCodigo(): number {
    return this._uaCodigo;
  }
}
