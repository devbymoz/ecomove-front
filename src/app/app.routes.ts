import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ViewVehicleListComponent } from './pages/admin/view-vehicle-list/view-vehicle-list.component';
import { FormVehicleComponent } from './pages/admin/form-vehicle/form-vehicle.component';

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
      {
        path: 'details-vehicule',
        component: DetailsvehicleComponent,
      },
      {
        path: 'ajouter-vehicule',
        component: FormVehicleComponent,
      },
      {
        path: 'modifier-vehicule',
        component: FormVehicleComponent,
      },
      {
        path: 'view-vehicle-list',
        component: ViewVehicleListComponent
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
