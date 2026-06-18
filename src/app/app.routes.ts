import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: App },
    { path: './components/login', component: Login }
];
