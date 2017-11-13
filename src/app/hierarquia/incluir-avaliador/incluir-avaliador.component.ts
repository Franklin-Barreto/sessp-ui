import {Component, OnInit} from '@angular/core';
import {ServidorService} from "../../servidor";

@Component({
  selector: 'app-incluir-avaliador',
  templateUrl: './incluir-avaliador.component.html',
  styles: [],
  providers:[ServidorService]
})
export class IncluirAvaliadorComponent implements OnInit {

  constructor(private servidorService: ServidorService) {
  }

  ngOnInit() {
  }

  pesquisarServidores(){

  }

}
