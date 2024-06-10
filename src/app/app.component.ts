import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component.js';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component.js';
import { ButtonComponent } from './components/buttons/button/button.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
import { CardCarpoolHistoricComponent } from './components/cards/card-carpool-historic/card-carpool-historic.component.js';
import { CardAnnonceCovoitComponent } from './components/cards/card-annonce-covoit/card-annonce-covoit.component.js';
import { CarCardComponent } from './components/cards/car-card/car-card.component.js';
import { CardReservationComponent } from './components/cards/card-reservation/card-reservation.component.js';
import { CarpoolCardDetailsComponent } from './components/cards/carpool-card-details/carpool-card-details.component';
import { CardListRentalVehicleComponent } from './components/cards/card-list-rental-vehicle/card-list-rental-vehicle.component.js';
import { NumberPageComponent } from './components/number-page/number-page.component.js';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component.js';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Import correct
import { CalendarComponent } from './components/calendar/calendar.component.js';
import { CardUserRentalComponent } from './components/cards/card-user-rental/card-user-rental.component.js';
import { ModalBaseComponent } from './components/modals/modal-base/modal-base.component.js';
import { ModalCancelCarpoolComponent } from './components/modals/modal-cancel-carpool/modal-cancel-carpool.component.js';
import { LoginPageComponent } from './pages/login-page/login-page.component.js';
import { HeaderBaseComponent } from './components/header-base/header-base.component.js';
import { NavColabComponent } from './components/navs/nav-colab/nav-colab.component.js';
import { NavAdminComponent } from './components/navs/nav-admin/nav-admin.component';
import { TabsComponent } from './components/tabs/tabs.component.js';
import { ModalBaseDangerComponent } from './components/modals/modal-base-danger/modal-base-danger.component';
import { ModalBaseMessageComponent } from './components/modals/modal-base-message/modal-base-message.component';
import { ReservationVehicleListComponent } from './pages/admin/reservation-vehicle-list/reservation-vehicle-list.component.js';
import { AuthState } from './store/auth/auth.reducer.js';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  imports: [RouterOutlet, NavAdminComponent, FooterComponent],

})
export class AppComponent {
  authState$: Observable<AuthState>;

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {
    this.authState$ = this.store.select('auth');

    // this.authState$.subscribe(({ user }) => {
    //   if (user.isLoggedIn) return this.router.navigateByUrl('home');

    //   return this.router.navigateByUrl('login');
    // });
  }
}
