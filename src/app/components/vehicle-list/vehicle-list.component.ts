import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  router = inject(Router);
  @Input() vehicleId = "";
  @Input() registration = "";
  @Input() brand = "";
  @Input() photo = "";


  showVehicleDetails(id: string) {
    this.router.navigate(['admin/details-vehicule', id]);
  }
}
