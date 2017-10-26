import {Component, OnInit} from '@angular/core';
import {Avaliador} from "../shared/avaliador";
import {HierarquiaService} from "../shared/hierarquia.service";

@Component({
  selector: 'app-incluir-avaliado',
  templateUrl: './incluir-avaliado.component.html',
  styles: []
})
export class IncluirAvaliadoComponent implements OnInit {

  private avaliador: Avaliador;


  constructor(private hierarquia: HierarquiaService) {

    this.avaliador = this.hierarquia.avaliador
    console.log(this.avaliador)
  }

  ngOnInit() {
  }

}
