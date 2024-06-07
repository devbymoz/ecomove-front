import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Si vous avez besoin de formulaires

@Component({
  selector: 'app-time-selector',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importer les modules nécessaires
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent {
  times: string[] = [];

  constructor() {
    // Générer des heures au format 24h (HHhMM)
    for (let i = 0; i < 24; i++) {
      this.times.push(`${i.toString().padStart(2, '0')}h00`);
      this.times.push(`${i.toString().padStart(2, '0')}h30`);
    }
  }
}