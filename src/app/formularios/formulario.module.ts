import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormularioService, FormularioComponent} from "./formulario/index";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import { FormBuscaComponent } from './form-busca/form-busca.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableModule,
    RadioButtonModule
  ],
  declarations: [FormularioComponent, FormBuscaComponent],
  exports:[FormularioComponent,FormBuscaComponent],
  providers: [FormularioService]
})
export class FormularioModule {


}
