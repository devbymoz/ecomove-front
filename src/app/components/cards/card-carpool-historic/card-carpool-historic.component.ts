import { Component } from '@angular/core';
import { CardBottomComponent } from '../../card-bottom/card-bottom.component.js';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-carpool-historic',
  standalone: true,
  imports: [CardBottomComponent, NgStyle],
  templateUrl: './card-carpool-historic.component.html',
  styleUrl: './card-carpool-historic.component.css'
})
export class CardCarpoolHistoricComponent {

}
