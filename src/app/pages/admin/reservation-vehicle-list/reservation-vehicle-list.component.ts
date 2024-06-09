import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { TabsComponent } from '../../../components/tabs/tabs.component';
import { CardReservationComponent } from '../../../components/cards/card-reservation/card-reservation.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';

@Component({
  selector: 'app-reservation-vehicle-list',
  standalone: true,
  imports: [ButtonComponent, TabsComponent,CardReservationComponent, NumberPageComponent],
  templateUrl: './reservation-vehicle-list.component.html',
  styleUrl: './reservation-vehicle-list.component.css'
})
export class ReservationVehicleListComponent {

}
