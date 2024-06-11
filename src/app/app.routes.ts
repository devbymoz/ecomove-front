import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';
import { AddVehicleComponent } from './pages/admin/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './pages/admin/update-vehicle/update-vehicle.component';
import { AppComponent } from './app.component';
import { ViewVehicleListComponent } from './pages/admin/view-vehicle-list/view-vehicle-list.component';
import { DetailsCarpoolingComponent } from './pages/colab/details-carpooling/details-carpooling.component';
import { DetailsReservationCarpoolingComponent } from './pages/colab/details-reservation-carpooling/details-reservation-carpooling.component';
import { AnnouncementCarpoolingOrganizerComponent } from './pages/colab/announcement-carpooling-organizer/announcement-carpooling-organizer.component';
import { ListReservedVehiclesComponent } from './pages/colab/list-reserved-vehicles/list-reserved-vehicles.component';
import { OrganizerCarpoolListComponent } from './pages/colab/organizer-carpool-list/organizer-carpool-list.component';
import { SearchCarpoolComponent } from './pages/colab/search-carpool/search-carpool.component';
import { CarpoolReservationHistoryComponent } from './pages/colab/carpool-reservation-history/carpool-reservation-history.component';

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
        component: AddVehicleComponent,
      },
      {
        path: 'modifier-vehicule',
        component: UpdateVehicleComponent,
      },
      {
        path: 'view-vehicle-list',
        component: ViewVehicleListComponent
      },
      {
        path: 'details-reservation-carpooling',
        component: DetailsReservationCarpoolingComponent
      },
      {
        path: 'details-carpooling',
        component: DetailsCarpoolingComponent
      },
      {
        path: 'announcement-carpooling-organizer',
        component: AnnouncementCarpoolingOrganizerComponent
      },
      {
        path: 'list-reserved-vehicles',
        component: ListReservedVehiclesComponent
      },
      {
        path: 'organizer-carpool-list',
        component: OrganizerCarpoolListComponent
      },
      {
        path: 'search-carpool',
        component: SearchCarpoolComponent
      },
      {
        path: 'carpool-reservation-history',
        component: CarpoolReservationHistoryComponent
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
