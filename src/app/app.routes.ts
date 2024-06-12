import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ViewVehicleListComponent } from './pages/admin/view-vehicle-list/view-vehicle-list.component';
import { DetailsCarpoolingComponent } from './pages/colab/details-carpooling/details-carpooling.component';
import { DetailsReservationCarpoolingComponent } from './pages/colab/details-reservation-carpooling/details-reservation-carpooling.component';
import { AnnouncementCarpoolingOrganizerComponent } from './pages/colab/announcement-carpooling-organizer/announcement-carpooling-organizer.component';
import { ListReservedVehiclesComponent } from './pages/colab/list-reserved-vehicles/list-reserved-vehicles.component';
import { OrganizerCarpoolListComponent } from './pages/colab/organizer-carpool-list/organizer-carpool-list.component';
import { SearchCarpoolComponent } from './pages/colab/search-carpool/search-carpool.component';
import { CarpoolReservationHistoryComponent } from './pages/colab/carpool-reservation-history/carpool-reservation-history.component';
import { FormVehicleComponent } from './pages/admin/form-vehicle/form-vehicle.component';
import { ErrorsPageComponent } from './pages/errors-page/errors-page.component';
import { SearchVehicleComponent } from './pages/colab/search-vehicle/search-vehicle.component';
import { DetailsReservationVehicleComponent } from './pages/colab/details-reservation-vehicle/details-reservation-vehicle.component';
import { adminGuard, loginGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      {
        path: 'vehicle-reservations',
        component: ReservationVehicleListComponent,
        canActivate: [adminGuard],
      },
      {
        path: 'details-vehicule/:id',
        component: DetailsvehicleComponent,
      },
      {
        path: 'q',
        component: FormVehicleComponent,
      },
      {
        path: 'modifier-vehicule',
        component: FormVehicleComponent,
      },
      {
        path: 'view-vehicle-list',
        component: ViewVehicleListComponent,
      },
      {
        path: 'details-reservation-carpooling',
        component: DetailsReservationCarpoolingComponent,
      },
      {
        path: 'details-carpooling',
        component: DetailsCarpoolingComponent,
      },
      {
        path: 'announcement-carpooling-organizer',
        component: AnnouncementCarpoolingOrganizerComponent,
      },
      {
        path: 'list-reserved-vehicles',
        component: ListReservedVehiclesComponent,
      },
      {
        path: 'organizer-carpool-list',
        component: OrganizerCarpoolListComponent,
      },
      {
        path: 'search-carpool',
        component: SearchCarpoolComponent,
      },
      {
        path: 'carpool-reservation-history',
        component: CarpoolReservationHistoryComponent,
      },
    ],
  },
  {
    path: 'colab',
    children: [
      {
        path: 'chercher-un-vehicule',
        component: SearchVehicleComponent,
      },
      {
        path: 'details-reservation-vehicule',
        component: DetailsReservationVehicleComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'page-erreur',
    component: ErrorsPageComponent,
  },
];
