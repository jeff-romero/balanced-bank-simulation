import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Home } from './home/home';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Navigation, Home, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('balanced-bank-simulation');
}
