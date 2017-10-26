import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import{DataTableModule} from 'primeng/components/datatable/datatable';

import {AppComponent} from './app.component';
import {UnidadesModule} from "./unidades/unidades.module";
import {FormularioModule} from './formularios/formulario.module';
import { MenuComponent } from './menu/menu.component';
import { EfetuarAvaliacaoComponent } from './avaliacao/efetuar-avaliacao.component';
import {ServidorModule} from "./servidor/servidor.module";
import { ListarAvaliadorComponent } from './hierarquia/listar-avaliadores/listar-avaliadores.component';
import { ListarAvaliadosComponent } from './hierarquia/listar-avaliados/listar-avaliados.component';
import { IncluirAvaliadoComponent } from './hierarquia/incluir-avaliado/incluir-avaliado.component';
import {HierarquiaService} from "./hierarquia/shared/hierarquia.service";

const appRoutes:Routes =[
  {path:"avaliacao/efetuar", component:EfetuarAvaliacaoComponent },
  {path:"hierarquia",component:ListarAvaliadorComponent},
  {path:"hierarquia/incluir-avaliado",component:IncluirAvaliadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EfetuarAvaliacaoComponent,
    ListarAvaliadorComponent,
    ListarAvaliadosComponent,
    IncluirAvaliadoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DataTableModule,
    UnidadesModule,
    FormularioModule,
    ServidorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HierarquiaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
