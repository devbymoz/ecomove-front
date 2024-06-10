import { NgClass } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent{
  // Permet de personnaliser le message depuis le parent.
  @Input() message: string = "";
  // Permet de changer le background du bandeau en fonction du type : success, error et alert.
  @Input() typeAlert: string = "error";
  isVisible = false;

  show(message: string, codeStatus: number) {
     if (codeStatus === 404) {
      this.typeAlert == "alert"
    }
    this.message = message;
    this.isVisible = true;
  }

  hidden() {
    this.isVisible = false;
  }


}
