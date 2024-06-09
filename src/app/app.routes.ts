import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'details-vehicule',
        component: DetailsvehicleComponent,
      },
    ],
  },
];
