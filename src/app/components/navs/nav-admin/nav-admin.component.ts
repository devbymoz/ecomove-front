import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderBaseComponent } from '../../header-base/header-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';
import { AsyncPipe, NgClass } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service.js';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [
    HeaderBaseComponent,
    ButtonComponent,
    NgClass,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css',
})
export class NavAdminComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  userIsLoggedIn: boolean | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.authService.userIsAuthenticated.subscribe((authenticated) => {
      this.userIsLoggedIn = authenticated;
    });
  }

  logout() {
    this.authService.logout();
  }

  redirectToLogin() {
    this.router.navigateByUrl('login');
  }
}
