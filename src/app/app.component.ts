import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component.js';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component.js';
import { ButtonComponent } from './components/button/button.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
import { CardCarpoolHistoricComponent } from './components/card-carpool-historic/card-carpool-historic.component.js';
import { CardAnnonceCovoitComponent } from './components/card-annonce-covoit/card-annonce-covoit.component.js';
import { CarCardComponent } from './components/car-card/car-card.component.js';
import { CardReservationComponent } from './components/card-reservation/card-reservation.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, BottomBarComponent, ButtonComponent, FooterComponent, CardCarpoolHistoricComponent, CardAnnonceCovoitComponent, CarCardComponent, CardReservationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomoveFront';
  
}
