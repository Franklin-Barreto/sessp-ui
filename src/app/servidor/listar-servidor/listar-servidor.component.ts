import {Component} from '@angular/core';
import {Servidor} from "../shared/servidor";
import {ServidorService} from "../shared/servidor.service";

@Component({
  selector: 'app-listar-servidor',
  templateUrl: './listar-servidor.component.html',
  styles: [],
  providers: [ServidorService]
})
export class ListarServidorComponent {

  servidores: Array<Servidor> = new Array();

  constructor(private servidorService: ServidorService) {
    this.getAllServidores();
  }

  getAllServidores() {
    this.servidorService.getServidores().subscribe((servidores) => {
      this.servidores = servidores;
    })
  }

  editRegister(servidor:Servidor){
    console.log(JSON.stringify(servidor));
  }


}
