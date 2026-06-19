import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  bankName = 'Balanced Banking';
  checkingSavings = 'Checking and Savings';
  services = 'Services';
  logIn = 'Log In';
  myAccount = 'My Account';
  // property binding - class
  loginStatus = 'fa fa-lock';
  @Input() isLoggedIn:boolean = false;

  constructor() {
    // let checkingSavingsDropdown = document.getElementById('checking-savings-dropdown') as HTMLSpanElement;
    // checkingSavingsDropdown.addEventListener("mouseover", (e) => {

    // });
  }

  hover(event: PointerEvent): void {
    event.preventDefault();
    console.log("hovered");
  }
}
