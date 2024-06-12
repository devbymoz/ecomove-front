import { Component } from '@angular/core';
import { TabsComponent } from '../../../components/tabs/tabs.component';
import { NumberPageComponent } from '../../../components/number-page/number-page.component';
import { CardCarpoolHistoricComponent } from '../../../components/cards/card-carpool-historic/card-carpool-historic.component';


@Component({
  selector: 'app-organizer-carpool-list',
  standalone: true,
  imports: [TabsComponent, CardCarpoolHistoricComponent, NumberPageComponent],
  templateUrl: './organizer-carpool-list.component.html',
  styleUrl: './organizer-carpool-list.component.css'
})
export class OrganizerCarpoolListComponent {

}
