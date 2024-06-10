import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selector-form.component.html',
  styleUrls: ['./selector-form.component.css']
})
export class SelectorFormComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}