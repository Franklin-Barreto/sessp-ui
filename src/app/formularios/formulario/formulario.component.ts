import {Component} from '@angular/core';

import {FormularioService, Formulario} from '../shared'
import {Fator} from "../shared/fator";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: Formulario;
  fatores:Array<Fator>;

  constructor(private formularioService: FormularioService) {
    this.gerarFormulario(1);
  }

  gerarFormulario(codigo: number) {
    this.formularioService.getFormularioPorCodigo(codigo).subscribe((formulario) => {
      this.formulario = formulario;
    })
  }
}
