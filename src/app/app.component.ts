import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component.js';
import { NavAdminComponent } from './components/navs/nav.component.js';
import { CreateCarpoolComponent } from './pages/create-carpool/create-carpool.component';
import { AuthService } from './services/auth/auth.service.js';

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
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {}

  ngOnInit() {
    if (!this.authService.user) this.router.navigateByUrl('login');
  }
}
