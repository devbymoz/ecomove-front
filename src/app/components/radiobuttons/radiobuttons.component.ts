import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radiobuttons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radiobuttons.component.html',
  styleUrl: './radiobuttons.component.css'
})
export class RadiobuttonsComponent {
  selectedStatus: string = '';

  updateStatus(value: string) {
    this.selectedStatus = value;
  }

}
