import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component.js';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-list-rental-vehicle',
  standalone: true,
  imports: [ButtonComponent, NgClass, NgStyle],
  templateUrl: './card-list-rental-vehicle.component.html',
  styleUrl: './card-list-rental-vehicle.component.css'
})
export class CardListRentalVehicleComponent {

}
