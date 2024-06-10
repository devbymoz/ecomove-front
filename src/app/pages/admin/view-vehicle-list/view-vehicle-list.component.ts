import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';
import { VehicleListComponent } from '../../../components/vehicle-list/vehicle-list.component';


@Component({
  selector: 'app-view-vehicle-list',
  standalone: true,
  imports: [ButtonComponent, NumberPageComponent, VehicleListComponent],
  templateUrl: './view-vehicle-list.component.html',
  styleUrl: './view-vehicle-list.component.css'
})
export class ViewVehicleListComponent {

}
