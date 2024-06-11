import { Component } from '@angular/core';
import { TabsComponent } from '../../../components/tabs/tabs.component';
import { CardAnnonceCovoitComponent } from '../../../components/cards/card-annonce-covoit/card-annonce-covoit.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';

@Component({
  selector: 'app-carpool-reservation-history',
  standalone: true,
  imports: [TabsComponent, CardAnnonceCovoitComponent, NumberPageComponent],
  templateUrl: './carpool-reservation-history.component.html',
  styleUrl: './carpool-reservation-history.component.css'
})
export class CarpoolReservationHistoryComponent {

}
