import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  fistname: String = 'Primeiro nome';
  lastname: String = 'Ultimo nome';
  username: String = 'Nome de usuário';
  password: String = 'senha';
  password2: String = 'reente a senha';
  email: String = 'e-mail';
  tel: String = 'número de telefone';
  singup: String = 'Cadastrar';
  singin: String = 'Entrar';

  constructor() {

   }

  ngOnInit() {

  }

  public validate() {
    return 'I work... almost';
  }
}
