import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  fistname = 'Primeiro nome';
  lastname = 'Ultimo nome';
  username = 'Nome de usuário';
  password = 'senha';
  password2 = 'reente a senha';
  email = 'e-mail';
  tel = 'número de telefone';
  singup = 'Cadastrar';

  constructor() {

   }

  ngOnInit() {

  }

  public validate() {
    return 'I work... almost';
  }
}
