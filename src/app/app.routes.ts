import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { ViewVehicleListComponent } from './pages/admin/view-vehicle-list/view-vehicle-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'view-vehicle-list',
        component: ViewVehicleListComponent
      },
  ]
  },
];
