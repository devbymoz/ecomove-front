import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarComponent } from '../../../components/calendar/calendar.component';
import { SelectorFormComponent } from '../../../components/selector-form/selector-form.component';
import { TimeSelectorComponent } from '../../../components/time-selector/time-selector.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { ReserverComponent } from '../../../components/reserver/reserver.component';


@Component({
  selector: 'app-details-reservation-vehicle',
  standalone: true,
  imports: [
    CalendarComponent, 
    TimeSelectorComponent, 
    ButtonComponent, 
    ReserverComponent
  ],
  templateUrl: './details-reservation-vehicle.component.html',
  styleUrls: ['./details-reservation-vehicle.component.css']
})
export class DetailsReservationVehicleComponent implements OnInit {
  isModification: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.isModification = url.some(segment => segment.path === 'modification-reservation-vehicule');
    });
  }
}