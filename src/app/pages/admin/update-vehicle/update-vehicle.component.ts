import { Component } from '@angular/core';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-update-vehicle',
  standalone: true,
  imports: [AddVehicleComponent],
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent {

}
