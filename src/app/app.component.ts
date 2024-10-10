import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component.js';
import { NavAdminComponent } from './components/navs/nav.component.js';
import { CreateCarpoolComponent } from './pages/create-carpool/create-carpool.component';
import { AuthService } from './services/auth/auth.service.js';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component.js';
import { AlertComponent } from './components/alert/alert.component.js';

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
    BottomBarComponent,
  ],
})
export class AppComponent {}
