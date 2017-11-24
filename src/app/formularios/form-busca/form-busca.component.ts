import {Component} from '@angular/core';
import {ServidorFilter, ServidorService, Servidor} from "../../servidor";

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styles: [],
  providers: [ServidorService]
})
export class FormBuscaComponent {


  servidorFilter: ServidorFilter = new ServidorFilter();
  servidores: Array<Servidor>;
  totaRegistros = 0;
  pagina: number = this.servidorFilter.page;

  constructor(private servidorService: ServidorService) {

  }

  filtrar(pagina) {

    this.servidorFilter.page = pagina;
    this.servidorService.getServidores(this.servidorFilter).subscribe(resultado => {
      this.servidores = resultado.servidores;
      this.totaRegistros = resultado.total;
    });
  }

  mudarPagina(event) {
    this.filtrar(event);
  }
}
