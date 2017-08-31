import {Questao} from "./questao";
export class Fator {

  private _codigo:number;
  private _titulo:string;
  private _questoes:Array<Questao>


  constructor(codigo: number, titulo: string, questoes: Array<Questao>) {
    this._codigo = codigo;
    this._titulo = titulo;
    this._questoes = questoes;
  }


  get codigo(): number {
    return this._codigo;
  }

  get titulo(): string {
    return this._titulo;
  }

  get questoes(): Array<Questao> {
    return this._questoes;
  }
}
