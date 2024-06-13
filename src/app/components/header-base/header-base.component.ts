import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-base',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-base.component.html',
  styleUrl: './header-base.component.css',
})
export class HeaderBaseComponent {}
