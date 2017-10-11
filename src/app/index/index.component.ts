import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  bigmsg = 'lorem ipsum sit amet';
  submsg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a magna';

  constructor() { }

  ngOnInit() {
  }

}
