import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'details-vehicule',
        component: DetailsvehicleComponent
      },
  ]
  }
];
