import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component.js';
import { CardAnnonceCovoitComponent } from './components/card-annonce-covoit/card-annonce-covoit.component.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent, CardAnnonceCovoitComponent ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomoveFront';

}
