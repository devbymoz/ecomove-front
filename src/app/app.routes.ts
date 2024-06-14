import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component';
import { DetailsvehicleComponent } from './pages/admin/detailsvehicle/detailsvehicle.component.js';
import { HomeComponent } from './pages/home/home.component';
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
import { PostCarpoolingAnnouncementComponent } from './pages/colab/post-carpooling-announcement/post-carpooling-announcement.component';
import { AdminGuard } from './guards/admin.guard';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    //canActivate: [AdminGuard],
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
      {
        path: 'creer-covoiturage',
        component: PostCarpoolingAnnouncementComponent,
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
        path: 'reservations-vehicules',
        component: ListReservedVehiclesComponent,
      },
      {
        path: 'organizer-carpool-list',
        component: OrganizerCarpoolListComponent,
      },
      {
        path: 'chercher-covoiturage',
        component: SearchCarpoolComponent,
      },
      {
        path: 'carpool-reservation-history',
        component: CarpoolReservationHistoryComponent,
      },
      {
        path: 'post-carpooling-announcement',
        component: PostCarpoolingAnnouncementComponent,
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
        path: 'mes-covoiturages',
        component: OrganizerCarpoolListComponent,
      },
      {
        path: 'chercher-covoiturage',
        component: SearchCarpoolComponent,
      },
      {
        path: 'carpool-reservation-history',
        component: CarpoolReservationHistoryComponent,
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
