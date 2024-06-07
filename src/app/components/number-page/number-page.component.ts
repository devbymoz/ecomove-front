import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export class NumberPageComponent {
  currentPage = 1;

  selectPage(page: number) {
    this.currentPage = page;
  }
}
