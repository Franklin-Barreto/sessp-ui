import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";

import {DropdownModule} from 'primeng/components/dropdown/dropdown';

import {UnidadeOrcamentariaComponent} from './orcamentaria/unidade-orcamentaria.component';
import {UnidadesService} from "./shared/unidades.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DropdownModule,
    FormsModule

  ],
  declarations: [UnidadeOrcamentariaComponent],
  providers: [UnidadesService],
  exports: [UnidadeOrcamentariaComponent]
})
export class UnidadesModule {
}
