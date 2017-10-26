import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataTableModule} from "primeng/components/datatable/datatable";

import {ListarServidorComponent} from './index';

@NgModule({
  imports: [
    CommonModule, DataTableModule
  ],
  declarations: [ListarServidorComponent],
  exports:[ListarServidorComponent]
})
export class ServidorModule {
}
