import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-session',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-session.html',
  styleUrl: './user-session.css',
})
export class UserSession implements OnInit {
  logIn = 'Log In';
  myAccount = 'My Account';
  // property binding - class
  loginStatus = 'fa fa-lock';
  @Input() isLoggedIn:boolean = false;

  ngOnInit() {

  }
}
