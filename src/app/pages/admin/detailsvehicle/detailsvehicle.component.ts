import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component.js';
import { NgClass } from '@angular/common';
import { VehicleService } from '../../../services/vehicle/vehicle.service.js';
import { DetailsVehicle } from '../../../models/vehicles/details-vehicle.interface.js';
import {
  ActivatedRoute,
  RedirectCommand,
  Router,
  RouterLink,
} from '@angular/router';
import { AlertComponent } from '../../../components/alert/alert.component.js';
import { Subscription } from 'rxjs';
import { SpinnerComponent } from '../../../components/spinner/spinner.component.js';

@Component({
  selector: 'app-detailsvehicle',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    AlertComponent,
    SpinnerComponent,
    RouterLink,
  ],
  templateUrl: './detailsvehicle.component.html',
  styleUrl: './detailsvehicle.component.css',
})
export class DetailsvehicleComponent implements OnInit, OnDestroy {
  private _detailsVehicle: DetailsVehicle | undefined;
  private _vehicleService = inject(VehicleService);
  private _route = inject(ActivatedRoute);
  router = inject(Router);
  id: string = '';
  @ViewChild('alertModal') alertModal!: AlertComponent;
  private _fetDetailsVehicleSubscription: Subscription | undefined;
  private _fetRemoveVehicleSubscription: Subscription | undefined;
  responseValid: boolean | undefined = undefined;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this._fetDetailsVehicleSubscription = this._vehicleService
      .fetchDetailsVehicle(this.id)
      .subscribe({
        next: (response) => {
          this._detailsVehicle = response.data;
          this.responseValid = true;
        },
        error: (err) => {
          this.responseValid = false;
          setTimeout(() => {
            this.router.navigate(['admin/liste-de-vehicules']);
          }, 5000);
          // console.log('Message : ', err.error.message);
          // console.log('Code :', err.error.codeStatus);
        },
      });
  }

  ngOnDestroy(): void {
    if (this._fetDetailsVehicleSubscription != undefined) {
      this._fetDetailsVehicleSubscription.unsubscribe();
    }
    if (this._fetRemoveVehicleSubscription != undefined) {
      this._fetRemoveVehicleSubscription.unsubscribe();
    }
  }

  get detailsVehicle() {
    return this._detailsVehicle;
  }

  removeVehicle(id: string): void {
    const confirmRemove = confirm(
      'Voulez-vous vraiment supprimer ce véhicule ?'
    );
    if (confirmRemove) {
      this._fetRemoveVehicleSubscription = this._vehicleService
        .fetchRemoveVehicle(id)
        .subscribe({
          next: (data) => {
            this.alertModal.show(
              'Le véhicule a bien été supprimé, vous allez être redirigé vers la liste des véhicules',
              200
            );
            setTimeout(() => {
              this.router.navigate(['admin/liste-de-vehicules']);
            }, 5000);
          },
          error: (err) => {
            this.alertModal.show(err.error.message, err.error.codeStatus);
            setTimeout(() => {
              this.alertModal.hidden();
            }, 5000);
          },
        });
    }
  }
}
