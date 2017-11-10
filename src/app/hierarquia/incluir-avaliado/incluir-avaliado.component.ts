import {Component, OnInit} from '@angular/core';
import {Avaliador} from "../shared/avaliador";
import {HierarquiaService} from "../shared/hierarquia.service";
import {Avaliado} from "../shared/avaliado";

@Component({
  selector: 'app-incluir-avaliado',
  templateUrl: './incluir-avaliado.component.html',
  styles: [],
  providers: [HierarquiaService]
})
export class IncluirAvaliadoComponent implements OnInit {

  private avaliador: Avaliador;
  private avaliados: Array<Avaliado> = new Array();

  constructor(private hierarquia: HierarquiaService) {

    let avaliadorRecebido = JSON.parse(localStorage.getItem("avaliador"));
    avaliadorRecebido._avaliados.forEach(avaliado=>{
      this.avaliados.push(new Avaliado(avaliado._nome, avaliado._rsCodigo, avaliado._pvCodigo, avaliado._exCodigo))
    })
    this.avaliador = new Avaliador(avaliadorRecebido._nome, avaliadorRecebido._rsCodigo, avaliadorRecebido._pvCodigo, avaliadorRecebido._exCodigo, avaliadorRecebido._uaCodigo, this.avaliados);
    localStorage.removeItem("avaliador")
  }

  ngOnInit() {
  }

}
