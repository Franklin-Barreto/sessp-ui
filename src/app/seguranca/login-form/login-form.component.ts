import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [],

})
export class LoginFormComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  login(cpf: string, senha: string) {

    this.auth.login(cpf, senha).subscribe(login => {
      return login;
    })
  }
}
