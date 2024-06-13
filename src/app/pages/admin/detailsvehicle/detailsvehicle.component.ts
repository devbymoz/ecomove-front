import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component.js';
import { NgClass } from '@angular/common';
import { VehicleService } from '../../../services/vehicle.service.js';
import { DetailsVehicle } from '../../../models/vehicles/details-vehicle.interface.js';
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';
import { AlertComponent } from '../../../components/alert/alert.component.js';
import { Subscription } from 'rxjs';
import { SpinnerComponent } from '../../../components/spinner/spinner.component.js';

@Component({
  selector: 'app-detailsvehicle',
  standalone: true,
  imports: [ButtonComponent, NgClass, AlertComponent, SpinnerComponent],
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
      .fetDetailsVehicle(this.id)
      .subscribe({
        next: (response) => {
          this._detailsVehicle = response.data;
          this.responseValid = true;
        },
        error: (err) => {
          this.responseValid = false;
          setTimeout(() => {
            
              this.router.navigate(['page-erreur']);
            
          }, 3000);
          console.log('Message : ', err.error.message);
          console.log('Code :', err.error.codeStatus);
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
    this._fetRemoveVehicleSubscription = this._vehicleService
      .fetchRemoveVehicle(id)
      .subscribe({
        next: (data) => {
          console.log('Données reçues : ', data);
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
