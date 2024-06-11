import { Component } from '@angular/core';
import { CalendarComponent } from '../../../components/calendar/calendar.component';
import { SelectorFormComponent } from '../../../components/selector-form/selector-form.component';
import { TimeSelectorComponent } from '../../../components/time-selector/time-selector.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';

@Component({
  selector: 'app-details-reservation-vehicle',
  standalone: true,
  imports: [CalendarComponent, TimeSelectorComponent, ButtonComponent],
  templateUrl: './details-reservation-vehicle.component.html',
  styleUrl: './details-reservation-vehicle.component.css'
})
export class DetailsReservationVehicleComponent {
  

}
