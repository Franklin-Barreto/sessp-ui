import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioService, FormularioComponent} from "./formulario/index";
import {FormsModule} from "@angular/forms";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";
import {FormBuscaComponent} from './form-busca/form-busca.component';
import {ServidorModule} from "../servidor/servidor.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    RadioButtonModule,
    ServidorModule,
    MultiSelectModule
  ],
  declarations: [FormularioComponent, FormBuscaComponent],
  exports: [FormularioComponent, FormBuscaComponent],
  providers: [FormularioService]
})
export class FormularioModule {


}
