export class Parametro {

  private _valor: number;
  private _titulo: string;
  private _descricao: string;


  constructor(valor: number, titulo: string, descricao: string) {
    this._valor = valor;
    this._titulo = titulo;
    this._descricao = descricao;
  }

  get valor(): number {
    return this._valor;
  }

  get titulo(): string {
    return this._titulo;
  }

  get descricao(): string {
    return this._descricao;
  }
}
