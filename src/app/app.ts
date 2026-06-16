import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { UserSession } from './components/user-session/user-session';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Navigation, UserSession, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('balanced-bank-simulation');
}
