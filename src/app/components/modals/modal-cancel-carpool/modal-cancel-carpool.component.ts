import { Component } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component.js';
import { NgClass } from '@angular/common';
import { CardUserRentalComponent } from '../../cards/card-user-rental/card-user-rental.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';

@Component({
  selector: 'app-modal-cancel-carpool',
  standalone: true,
  imports: [ModalBaseComponent, NgClass, CardUserRentalComponent, ButtonComponent],
  templateUrl: './modal-cancel-carpool.component.html',
  styleUrl: './modal-cancel-carpool.component.css'
})
export class ModalCancelCarpoolComponent {

}
