export class Questao {

  private _codigo: number;
  private _descricao: string;


  constructor(codigo: number, descricao: string) {
    this._codigo = codigo;
    this._descricao = descricao;
  }

  get codigo(): number {
    return this._codigo;
  }

  get descricao(): string {
    return this._descricao;
  }
}
