import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Data} from '@angular/router';
import {HierarquiaService} from "../shared/hierarquia.service";
import {Avaliador} from "../shared/avaliador";

@Component({
  selector: 'app-listar-hierarquia',
  templateUrl: 'listar-avaliadores.component.html',
  styles: []
})
export class ListarAvaliadorComponent implements OnInit {

  avaliadores: Array<Avaliador> = new Array();

  constructor(private hierarquia: HierarquiaService,private router:Router) {

    this.hierarquia.getAvaliadores().subscribe(avaliadores => {
      this.avaliadores = avaliadores;
      console.log(avaliadores);
    })
  }

  detalharAvaliador(avaliador:Avaliador){
    this.hierarquia.avaliador = avaliador;
    console.log("BLA"+JSON.stringify(this.hierarquia.avaliador));
    this.router.navigate(['hierarquia/incluir-avaliado'])
  }

  ngOnInit() {
  }

}
