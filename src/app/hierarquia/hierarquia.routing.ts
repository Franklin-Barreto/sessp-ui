/**
 * Created by fpbarreto on 27/10/2017.
 */
import {Routes} from "@angular/router";

import {ListarAvaliadorComponent} from "./listar-avaliadores/listar-avaliadores.component";
import {IncluirAvaliadoComponent} from "./incluir-avaliado/incluir-avaliado.component";
import {IncluirAvaliadorComponent} from "./incluir-avaliador/incluir-avaliador.component";

export const HierarquiaRoutes:Routes = [
  {path:"hierarquia",component:ListarAvaliadorComponent},
  {path:"hierarquia/incluir-avaliado",component:IncluirAvaliadoComponent},
  {path:"hierarquia/incluir-avaliador",component:IncluirAvaliadorComponent}
]
