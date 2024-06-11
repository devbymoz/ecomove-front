import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = ''; // Nouvelle propriété
  @Input() type: string = 'text'; // Par défaut à "text"
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}