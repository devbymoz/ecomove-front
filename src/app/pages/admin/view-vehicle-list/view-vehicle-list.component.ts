import { Component, OnInit, inject } from '@angular/core';
import { VehicleService } from '../../../services/vehicle/vehicle.service';
import { DetailsVehicle } from '../../../models/vehicles/details-vehicle.interface';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';
import { VehicleListComponent } from '../../../components/vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-view-vehicle-list',
  standalone: true,
  imports: [ButtonComponent, NumberPageComponent, VehicleListComponent],
  templateUrl: './view-vehicle-list.component.html',
  styleUrls: ['./view-vehicle-list.component.css']
})
export class ViewVehicleListComponent implements OnInit {
  vehicles: DetailsVehicle[] = [];
  private _vehicleService = inject(VehicleService);

  ngOnInit(): void {
    this._vehicleService.fetchListVehicle().subscribe({
      next: (response) => {
        this.vehicles = response.data;
      },
      error: (err) => {
        console.log('Erreur lors de la récupération des véhicules :', err);
      }
    });
  }
}
