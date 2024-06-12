import { Component } from '@angular/core';
import { CardListRentalVehicleComponent } from '../../../components/cards/card-list-rental-vehicle/card-list-rental-vehicle.component';
import { TabsComponent } from '../../../components/tabs/tabs.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';

@Component({
  selector: 'app-list-reserved-vehicles',
  standalone: true,
  imports: [CardListRentalVehicleComponent, TabsComponent, NumberPageComponent],     
  templateUrl: './list-reserved-vehicles.component.html',
  styleUrl: './list-reserved-vehicles.component.css'
})
export class ListReservedVehiclesComponent {

}
