import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component.js';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component.js';
import { ButtonComponent } from './components/button/button.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
import { CardCarpoolHistoricComponent } from './components/cards/card-carpool-historic/card-carpool-historic.component.js';
import { NavbarComponent } from './components/navbar/navbar.component.js';
import { CardAnnonceCovoitComponent } from './components/cards/card-annonce-covoit/card-annonce-covoit.component.js';
import { CarCardComponent } from './components/cards/car-card/car-card.component.js';
import { CardReservationComponent } from './components/cards/card-reservation/card-reservation.component.js';
import { CarpoolCardDetailsComponent } from './components/cards/carpool-card-details/carpool-card-details.component';
import { CardListRentalVehicleComponent } from './components/cards/card-list-rental-vehicle/card-list-rental-vehicle.component.js';
import { NumberPageComponent } from './components/number-page/number-page.component.js';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component.js';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Import correct
import { CalendarComponent } from './components/calendar/calendar.component.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, BottomBarComponent, ButtonComponent, FooterComponent, CardCarpoolHistoricComponent, CardAnnonceCovoitComponent, CarCardComponent, CardReservationComponent, NavbarComponent, NumberPageComponent, TimeSelectorComponent, CardListRentalVehicleComponent, CarpoolCardDetailsComponent, MatSlideToggleModule, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomoveFront';

}
