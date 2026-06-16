import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-session',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-session.html',
  styleUrl: './user-session.css',
})
export class UserSession {
  logIn = 'Log In';
  myAccount = 'My Account';
}
