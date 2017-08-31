import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioService, FormularioComponent} from "./formulario/index";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTableModule} from "primeng/components/datatable/datatable";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  declarations: [FormularioComponent],
  exports:[FormularioComponent],
  providers: [FormularioService]
})
export class FormularioModule {


}
