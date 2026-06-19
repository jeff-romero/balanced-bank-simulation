import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Navigation, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('balanced-bank-simulation');
}
