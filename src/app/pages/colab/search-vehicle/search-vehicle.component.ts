import { Component } from '@angular/core';
import { CarCardComponent } from '../../../components/cards/car-card/car-card.component';
import { SelectorFormComponent } from '../../../components/selector-form/selector-form.component';
import { LabelInputComponent } from '../../../components/label-input/label-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from '../../../components/calendar/calendar.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';

@Component({
  selector: 'app-search-vehicle',
  standalone: true,
  imports: [CarCardComponent, SelectorFormComponent,LabelInputComponent,CommonModule, FormsModule, CalendarComponent, ButtonComponent, NumberPageComponent],
  templateUrl: './search-vehicle.component.html',
  styleUrl: './search-vehicle.component.css'
})
export class SearchVehicleComponent {
  marque: string = 'Peugeot';
  modele: string = '108';
  nombreDePlaces: string = '2';
  motorisation: string = 'Hybride';
  date: string = '31 Mars';

}
