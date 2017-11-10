import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HierarquiaRoutes} from "./hierarquia.routing";
import {IncluirAvaliadoComponent} from "./incluir-avaliado/incluir-avaliado.component";
import {ListarAvaliadorComponent} from "./listar-avaliadores/listar-avaliadores.component";
import {ListarAvaliadosComponent} from "./listar-avaliados/listar-avaliados.component";
import {DataTableModule} from "primeng/components/datatable/datatable";
import { IncluirAvaliadorComponent } from './incluir-avaliador/incluir-avaliador.component';
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {FormularioModule} from "../formularios/formulario.module";
import {ServidorModule} from "../servidor/servidor.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(HierarquiaRoutes),
    DataTableModule,
    InputTextModule,
    FormularioModule,
    ServidorModule
  ],
  declarations: [
    IncluirAvaliadoComponent,
    ListarAvaliadorComponent,
    ListarAvaliadosComponent,
    IncluirAvaliadorComponent
  ]
})
export class HierarquiaModule {
}
