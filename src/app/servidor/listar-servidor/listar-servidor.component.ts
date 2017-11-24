import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Servidor} from "../shared/servidor";
import {ServidorService} from "../shared/servidor.service";
import {LazyLoadEvent} from "primeng/components/common/lazyloadevent";

@Component({
  selector: 'app-listar-servidor',
  templateUrl: './listar-servidor.component.html',
  styles: [],
  providers: [ServidorService]
})
export class ListarServidorComponent {
  @Input() servidores: Array<Servidor>;
  @Input() totalRegistros: number;
  @Input() linhas: number;
  @Output() pagina: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  editRegister(servidor: Servidor) {
    console.log(JSON.stringify(servidor));
  }

  loadServidoresLazy(event: LazyLoadEvent) {
    this.pagina.emit(event.first / event.rows)
  }

}
