import { Component } from '@angular/core';
import { ModalBaseComponent } from '../modal-base/modal-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';

@Component({
  selector: 'app-modal-base-message',
  standalone: true,
  imports: [ModalBaseComponent, ButtonComponent],
  templateUrl: './modal-base-message.component.html',
  styleUrl: './modal-base-message.component.css'
})
export class ModalBaseMessageComponent {

}
