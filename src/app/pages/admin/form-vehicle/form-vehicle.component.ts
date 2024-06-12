import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LabelInputComponent } from '../../../components/label-input/label-input.component';
import { SelectorFormComponent } from '../../../components/selector-form/selector-form.component';
import { ButtonComponent } from '../../../components/buttons/button/button.component';
import { RadiobuttonsComponent } from '../../../components/radiobuttons/radiobuttons.component'; 

@Component({
  selector: 'app-form-vehicle',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    LabelInputComponent, 
    SelectorFormComponent, 
    ButtonComponent, 
    RadiobuttonsComponent
  ],
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.css']
})
export class FormVehicleComponent {
  title: string = '';
  description: string = '';
  showStatusOptions: boolean = false;

  immatriculation: string = '';
  marque: string = '';
  modele: string = '';
  categorie: string = '';
  lien: string = '';
  places: string = '';
  motorisation: string = '';
  co2: string = '';
  status: string = 'en service';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe(url => {
      this.showStatusOptions = url.some(segment => segment.path === 'modifier-vehicule');
      this.initializeForm();
    });
  }

  initializeForm() {
    if (this.showStatusOptions) {
      this.editMode();
    } else {
      this.addMode();
    }
  }

  editMode() {
    this.immatriculation = 'AA-123-BB';
    this.marque = 'Peugeot';
    this.modele = '108';
    this.categorie = 'SUV';
    this.lien = 'https://image.com/308';
    this.places = '5';
    this.motorisation = 'Essence';
    this.co2 = '95';
    this.status = 'en service';
  }

  addMode() {
    this.immatriculation = '';
    this.marque = '';
    this.modele = '';
    this.categorie = '';
    this.lien = '';
    this.places = '';
    this.motorisation = '';
    this.co2 = '';
    this.status = 'en service';
  }

  onSubmit() {
    if (this.showStatusOptions) {
      // Logique de modification
    } else {
      // Logique d'ajout
    }
  }

  onCancel() {
    // Logique d'annulation
  }
}
