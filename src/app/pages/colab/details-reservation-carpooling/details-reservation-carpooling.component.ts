import { Component } from '@angular/core';
import { CarpoolCardDetailsComponent } from '../../../components/cards/carpool-card-details/carpool-card-details.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';

@Component({
  selector: 'app-details-reservation-carpooling',
  standalone: true,
  imports: [CarpoolCardDetailsComponent, ButtonComponent],
  templateUrl: './details-reservation-carpooling.component.html',
  styleUrl: './details-reservation-carpooling.component.css'
})
export class DetailsReservationCarpoolingComponent {

}
