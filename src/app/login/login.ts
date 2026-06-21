import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  @Input() loggedIn:boolean = false;

  constructor() {
  }

  ngOnInit() {
    if (this.loggedIn) {
      
    }
  }

  logIn() {

  }
}
