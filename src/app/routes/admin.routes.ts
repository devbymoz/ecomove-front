import { Routes } from '@angular/router';
import { ReservationVehicleListComponent } from '../pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from '../pages/admin/detailsvehicle/detailsvehicle.component';
import { FormVehicleComponent } from '../pages/admin/form-vehicle/form-vehicle.component';
import { ViewVehicleListComponent } from '../pages/admin/view-vehicle-list/view-vehicle-list.component';
import { loggedInGuard } from '../guards/logged-in/logged-in.guard.js';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [loggedInGuard],
    children: [
      {
        path: 'vehicle-reservations',
        component: ReservationVehicleListComponent,
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
        path: 'modifier-vehicule/:id',
        component: FormVehicleComponent,
      },
      {
        path: 'liste-de-vehicules',
        component: ViewVehicleListComponent,
      },
    ],
  },
];
