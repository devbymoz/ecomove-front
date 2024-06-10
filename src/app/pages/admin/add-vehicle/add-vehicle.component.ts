import { Component } from '@angular/core';
import { LabelInputComponent } from '../../../components/label-input/label-input.component';
import { SelectorFormComponent } from '../../../components/selector-form/selector-form.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [LabelInputComponent, SelectorFormComponent, ButtonComponent],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent {
  immatriculation: string = ''; 
  marque: string = ''; 
  modele: string = '';
  places: string = '';
  lien: string = '';
  motorisation: string = '';
  categorie: string = '';

}
