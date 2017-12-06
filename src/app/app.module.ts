import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {UnidadesModule} from "./unidades/unidades.module";
import {FormularioModule} from "./formularios/formulario.module";
import {MenuComponent} from "./menu/menu.component";
import {EfetuarAvaliacaoComponent} from "./avaliacao/efetuar-avaliacao.component";
import {HierarquiaModule} from "./hierarquia/hierarquia.module";
import {FormsModule} from "@angular/forms";
import {SegurancaModule} from './seguranca'
import {JwtHelper} from "angular2-jwt";
import {AuthService} from "./seguranca/shared/auth.service";
import {TokenInterceptor} from "./seguranca/shared/token-interceptor.service";
import {JwtInterceptor} from "./seguranca/shared/jwt-interpector";


const appRoutes: Routes = [
  {path: "avaliacao/efetuar", component: EfetuarAvaliacaoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EfetuarAvaliacaoComponent


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    UnidadesModule,
    FormsModule,
    FormularioModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HierarquiaModule,
    SegurancaModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},AuthService, JwtHelper
  /*, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule {
}

