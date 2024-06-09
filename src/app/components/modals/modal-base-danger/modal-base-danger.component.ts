import { Component } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';

@Component({
  selector: 'app-modal-base-danger',
  standalone: true,
  imports: [ModalBaseComponent, ButtonComponent],
  templateUrl: './modal-base-danger.component.html',
  styleUrl: './modal-base-danger.component.css'
})
export class ModalBaseDangerComponent {

}
