// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './home/login/login';

export const routes: Routes = [  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'login',
        component: Login,
        outlet: 'loginOutlet' // Named outlet for Login
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];