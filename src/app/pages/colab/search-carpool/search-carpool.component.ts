import { Component } from '@angular/core';
import { CardAnnonceCovoitComponent } from '../../../components/cards/card-annonce-covoit/card-annonce-covoit.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';
import { CalendarComponent } from '../../../components/calendar/calendar.component';


@Component({
  selector: 'app-search-carpool',
  standalone: true,
  imports: [CardAnnonceCovoitComponent, NumberPageComponent, CalendarComponent],
  templateUrl: './search-carpool.component.html',
  styleUrl: './search-carpool.component.css'
})
export class SearchCarpoolComponent {

}
