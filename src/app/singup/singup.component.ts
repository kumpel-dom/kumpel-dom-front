import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  username: String = 'username';
  password: String = 'senha';
  firstname: String = 'Primeiro nome';
  lastname: String = 'Ultimo nome';
  email: String = 'E-mail';
  title: String = 'Kumpel dom';
  singup: String = 'Cadastrar';
  agree: String = 'Eu aceito';

  constructor() { }

  ngOnInit() {
  }

}
