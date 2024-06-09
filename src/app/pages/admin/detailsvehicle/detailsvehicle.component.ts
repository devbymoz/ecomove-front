import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/buttons/button/button.component.js';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detailsvehicle',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './detailsvehicle.component.html',
  styleUrl: './detailsvehicle.component.css'
})
export class DetailsvehicleComponent {

}
