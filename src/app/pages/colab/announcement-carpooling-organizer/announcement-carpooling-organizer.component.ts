import { Component } from '@angular/core';
import { CardCarpoolHistoricComponent } from '../../../components/cards/card-carpool-historic/card-carpool-historic.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';

@Component({
  selector: 'app-announcement-carpooling-organizer',
  standalone: true,
  imports: [CardCarpoolHistoricComponent, ButtonComponent],
  templateUrl: './announcement-carpooling-organizer.component.html',
  styleUrl: './announcement-carpooling-organizer.component.css'
})
export class AnnouncementCarpoolingOrganizerComponent {

}
