import { Component, Input } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';

@Component({
  selector: 'app-reserver',
  standalone: true,
  imports: [CalendarComponent, TimeSelectorComponent],
  templateUrl: './reserver.component.html',
  styleUrl: './reserver.component.css'
})
export class ReserverComponent {
  @Input() dateTitle: string = 'Date';
}
