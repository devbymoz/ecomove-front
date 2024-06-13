import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component.js';
import { NavAdminComponent } from './components/navs/nav-admin/nav-admin.component';
import { CreateCarpoolComponent } from './pages/create-carpool/create-carpool.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavAdminComponent,
    FooterComponent,
    CreateCarpoolComponent,
  ],
})
export class AppComponent {
  constructor() {}
}
