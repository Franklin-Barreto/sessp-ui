import {Component} from '@angular/core';

import {UnidadesService} from "../shared/unidades.service";
import {SelectItem} from "primeng/components/common/selectitem";


@Component({
  selector: 'app-unidade-orcamentaria',
  templateUrl: './unidade-orcamentaria.component.html',
  styles: []
})
export class UnidadeOrcamentariaComponent {

  uos: SelectItem[];
  uds: SelectItem[];
  uas: SelectItem[];

  constructor(private unidadesService: UnidadesService) {
    this.getUosSelectItem()
  }

  getUosSelectItem() {
    this.unidadesService.getUos().subscribe(uos => {
      this.uos = [];
      uos.forEach(uo => {
        this.uos.push({label: uo.descricao, value: {id: uo.codigoUo, uds: uo.unidadesDespesa}})
      })
    })
  }

  getUds(uds) {
    this.uds = [];
    uds.forEach(ud => {
      this.uds.push({label: ud.udDescricao, value: {id: ud.udCodigo, uas: ud.unidadesAdministrativas}})
    })
  }

  getUas(uas) {
    this.uas = [];
    uas.forEach(ua => {
      this.uas.push({label: ua.uaDescricao, value: ua.uaCodigo})
    })
  }
}
