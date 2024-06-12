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
  @Input() message: string = '';
  // Permet de changer le background du bandeau en fonction du type : success, error et alert.
  isSuccess: boolean = false;
  isAlert: boolean = false;
  isError: boolean = false;
  isVisible: boolean = false;
  isHidden: boolean = false;

  show(message: string, codeStatus?: any) {
    if (codeStatus == 200) {
      this.Success();
    } else if (codeStatus == 404) {
      this.Error();
    } else {
      this.Alert();
    }

    this.message = message;
    this.isVisible = true;
  }

  hidden() {
    this.isVisible = false;
  }

  Success() {
    this.isSuccess = true;
    this.isAlert = false;
    this.isError = false;
  }
  Alert() {
    this.isAlert = true;
    this.isSuccess = false;
    this.isError = false;
  }
  Error() {
    this.isSuccess = false;
    this.isAlert = false;
    this.isError = true;
  }

}
