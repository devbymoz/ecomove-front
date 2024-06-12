import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ViewVehicleListComponent } from './pages/admin/view-vehicle-list/view-vehicle-list.component';
import { FormVehicleComponent } from './pages/admin/form-vehicle/form-vehicle.component';
import { SearchVehicleComponent } from './pages/colab/search-vehicle/search-vehicle.component';
import { DetailsReservationVehicleComponent } from './pages/colab/details-reservation-vehicle/details-reservation-vehicle.component';

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
        path: 'details-vehicule/:id',
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
    path: 'colab',
    children: [
      {
        path: 'chercher-un-vehicule',
        component: SearchVehicleComponent
      },
      {
        path: 'details-reservation-vehicule',
        component: DetailsReservationVehicleComponent
      },
      {
        path: 'modification-reservation-vehicule',
        component: DetailsReservationVehicleComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
