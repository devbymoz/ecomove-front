import { Routes } from '@angular/router';
import { AnnouncementCarpoolingOrganizerComponent } from '../pages/colab/announcement-carpooling-organizer/announcement-carpooling-organizer.component';
import { CarpoolReservationHistoryComponent } from '../pages/colab/carpool-reservation-history/carpool-reservation-history.component';
import { DetailsCarpoolingComponent } from '../pages/colab/details-carpooling/details-carpooling.component';
import { DetailsReservationCarpoolingComponent } from '../pages/colab/details-reservation-carpooling/details-reservation-carpooling.component';
import { DetailsReservationVehicleComponent } from '../pages/colab/details-reservation-vehicle/details-reservation-vehicle.component';
import { ListReservedVehiclesComponent } from '../pages/colab/list-reserved-vehicles/list-reserved-vehicles.component';
import { OrganizerCarpoolListComponent } from '../pages/colab/organizer-carpool-list/organizer-carpool-list.component';
import { PostCarpoolingAnnouncementComponent } from '../pages/colab/post-carpooling-announcement/post-carpooling-announcement.component';
import { SearchCarpoolComponent } from '../pages/colab/search-carpool/search-carpool.component';
import { SearchVehicleComponent } from '../pages/colab/search-vehicle/search-vehicle.component';
import { loggedInGuard } from '../guards/logged-in/logged-in.guard.js';

export const colabRoutes: Routes = [
  {
    path: 'colab',
    canActivate: [loggedInGuard],
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
];
