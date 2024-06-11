import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { CarpoolCardDetailsComponent } from '../../../components/cards/carpool-card-details/carpool-card-details.component';

@Component({
  selector: 'app-details-carpooling',
  standalone: true,
  imports: [ ButtonComponent, CarpoolCardDetailsComponent],
  templateUrl: './details-carpooling.component.html',
  styleUrl: './details-carpooling.component.css'
})
export class DetailsCarpoolingComponent {

}
