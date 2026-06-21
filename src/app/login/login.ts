import { Component, Input, OnInit } from '@angular/core';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  @Input() loggedIn:boolean = false;
  email = "";
  password = "";

  constructor() {
  }

  ngOnInit() {
    if (this.loggedIn) {
      
    }
  }

  logIn(): void {
    let toHash = this.password;
    let hash = CryptoJS.SHA256(toHash).toString();
    console.log(hash);
  }
}
