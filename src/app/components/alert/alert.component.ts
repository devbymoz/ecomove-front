import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  // Permet de personnaliser le message depuis le parent.
  @Input() message: string = "Message de l'enfant";
  // Permet de changer le background du bandeau en fonction du type : success, error et alert.
  @Input() typeAlert: string = "error";
}
