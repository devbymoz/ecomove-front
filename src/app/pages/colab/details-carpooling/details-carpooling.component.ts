import { Component } from '@angular/core';
import { CarpoolCardDetailsComponent } from '../../../components/cards/carpool-card-details/carpool-card-details.component';

@Component({
  selector: 'app-details-carpooling',
  standalone: true,
  imports: [CarpoolCardDetailsComponent],
  templateUrl: './details-carpooling.component.html',
  styleUrl: './details-carpooling.component.css'
})
export class DetailsCarpoolingComponent {

}
