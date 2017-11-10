import {Component, OnInit, Input} from '@angular/core';
import {Avaliado} from "../shared/avaliado";

@Component({
  selector: 'app-listar-avaliados',
  templateUrl: './listar-avaliados.component.html',
  styles: []
})
export class ListarAvaliadosComponent implements OnInit {

  @Input() avaliados: Array<Avaliado> = new Array();

  constructor() {
    console.log("construtor"+this.avaliados)
  }

  ngOnInit() {
  }

}
