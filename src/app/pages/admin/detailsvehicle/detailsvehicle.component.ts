import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component.js';
import { NgClass } from '@angular/common';
import { VehicleService } from '../../../services/vehicle.service.js';
import { DetailsVehicle } from '../../../models/details-vehicle.interface.js';
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';
import { AlertComponent } from '../../../components/alert/alert.component.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailsvehicle',
  standalone: true,
  imports: [ButtonComponent, NgClass, AlertComponent],
  templateUrl: './detailsvehicle.component.html',
  styleUrl: './detailsvehicle.component.css',
})
export class DetailsvehicleComponent implements OnInit, OnDestroy{
  private _detailsVehicle: DetailsVehicle | undefined;
  private _vehicleService = inject(VehicleService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  id: string = '';
  // private _fetDetailsVehicleSubscription: Subscription<> = "";

  @ViewChild('alertModal') alertModal!: AlertComponent;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this._vehicleService.fetDetailsVehicle(this.id).subscribe({
      next: (response) => {
        this._detailsVehicle = response.data;
      },
      error: (err) => {
        console.log("Message : ", err.error.message);
        console.log("Code :", err.error.codeStatus);
      }
    });
  }

  ngOnDestroy(): void {
    // this._fetDetailsVehicleSubscription.unsubscribe()
  }

  get detailsVehicle() {
    return this._detailsVehicle;
  }

  removeVehicle(id: string): void {
    this._vehicleService.fetchRemoveVehicle(id).subscribe({
      next: (data) => {
        console.log('Données reçues : ', data);
      },
      error: (err) => {
        this.alertModal.show(err.error.message, err.error.codeStatus);
        setTimeout(()=> {
          this.alertModal.hidden();
        }, 5000);
      },
      complete: () => {
        console.log('Requête terminée');
      },
    });
  }
}
