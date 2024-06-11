import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radiobuttons',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radiobuttons.component.html', // Vérifiez ce chemin
  styleUrls: ['./radiobuttons.component.css']
})
export class RadiobuttonsComponent {
  @Input() selectedValue: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  options: { value: string, label: string }[] = [
    { value: 'en_service', label: 'En service' },
    { value: 'en_reparation', label: 'En réparation' },
    { value: 'hors_service', label: 'Hors service' }
  ];

  onValueChange(event: any) {
    this.selectedValueChange.emit(event.target.value);
  }
}