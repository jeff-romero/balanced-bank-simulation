import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  checkingSavings = 'Checking and Savings';
  services = 'Services';

  constructor() {
    // let checkingSavingsDropdown = document.getElementById('checking-savings-dropdown') as HTMLSpanElement;
    // checkingSavingsDropdown.addEventListener("mouseover", (e) => {

    // });
  }
}
