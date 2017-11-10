import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HierarquiaService} from "../shared/hierarquia.service";
import {Avaliador} from "../shared/avaliador";

@Component({
  selector: 'app-listar-hierarquia',
  templateUrl: 'listar-avaliadores.component.html',
  styles: [],
  providers: [HierarquiaService]
})
export class ListarAvaliadorComponent implements OnInit {

  avaliadores: Array<Avaliador> = new Array();

  constructor(private hierarquia: HierarquiaService, private router: Router) {
    this.hierarquia.getAvaliadores().subscribe(avaliadores => {
      this.avaliadores = avaliadores;
    })
  }

  detalharAvaliador(avaliador: Avaliador) {
    localStorage.setItem('avaliador', JSON.stringify(avaliador));
    this.router.navigate(['hierarquia/incluir-avaliado'])
  }

  ngOnInit() {
  }

}
