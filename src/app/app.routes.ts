import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'reservation-vehicule',
        component: ReservationVehicleListComponent
      },
  ]
  }
];
