import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';
import { BottomBarComponent } from '../../components/bottom-bar/bottom-bar.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardCarpoolHistoricComponent } from '../../components/cards/card-carpool-historic/card-carpool-historic.component';
import { CardAnnonceCovoitComponent } from '../../components/cards/card-annonce-covoit/card-annonce-covoit.component';
import { CarCardComponent } from '../../components/cards/car-card/car-card.component';
import { CardReservationComponent } from '../../components/cards/card-reservation/card-reservation.component';
import { NumberPageComponent } from '../../components/number-page/number-page.component';
import { TimeSelectorComponent } from '../../components/time-selector/time-selector.component';
import { CardListRentalVehicleComponent } from '../../components/cards/card-list-rental-vehicle/card-list-rental-vehicle.component';
import { CarpoolCardDetailsComponent } from '../../components/cards/carpool-card-details/carpool-card-details.component';
import { CardUserRentalComponent } from '../../components/cards/card-user-rental/card-user-rental.component';
import { ModalBaseComponent } from '../../components/modals/modal-base/modal-base.component';
import { ModalCancelCarpoolComponent } from '../../components/modals/modal-cancel-carpool/modal-cancel-carpool.component';
import { HeaderBaseComponent } from '../../components/header-base/header-base.component';
import { NavColabComponent } from '../../components/navs/nav-colab/nav-colab.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NavAdminComponent } from '../../components/navs/nav-admin/nav-admin.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { LabelInputComponent } from '../../components/label-input/label-input.component';
import { SelectorFormComponent } from '../../components/selector-form/selector-form.component';
import { RadiobuttonsComponent } from '../../components/radiobuttons/radiobuttons.component'; // Assurez-vous du chemin correct

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    AlertComponent,
    BottomBarComponent,
    ButtonComponent,
    FooterComponent,
    CardCarpoolHistoricComponent,
    CardAnnonceCovoitComponent,
    CarCardComponent,
    CardReservationComponent,
    NumberPageComponent,
    TimeSelectorComponent,
    CardListRentalVehicleComponent,
    CarpoolCardDetailsComponent,
    CardUserRentalComponent,
    CalendarComponent,
    TabsComponent,
    ModalBaseComponent,
    ModalCancelCarpoolComponent,
    HeaderBaseComponent,
    NavColabComponent,
    LoginPageComponent,
    NavAdminComponent,
    RadiobuttonsComponent, 
    LabelInputComponent,
    SelectorFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
