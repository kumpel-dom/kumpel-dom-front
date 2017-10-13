import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  username: String = 'username';
  password: String = 'senha';
  title: String = 'Kumpel dom';
  singin: String = 'Entrar';

  constructor() { }

  ngOnInit() {
  }

}
