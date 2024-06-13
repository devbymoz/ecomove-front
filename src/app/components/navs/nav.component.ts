import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderBaseComponent } from '../header-base/header-base.component.js';
import { ButtonComponent } from '../buttons/button/button.component.js';
import { AsyncPipe, NgClass } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service.js';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    HeaderBaseComponent,
    ButtonComponent,
    NgClass,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavAdminComponent {
  authService = inject(AuthService);
  router = inject(Router);
  userIsLoggedIn: boolean | null = true;

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

  searchVehicle() {
    this.router.navigateByUrl('colab/chercher-un-vehicule');
  }
  searchCarpool() {
    this.router.navigateByUrl('colab/chercher-covoiturage');
  }

  headToAddVehicle() {
    this.router.navigateByUrl('admin/ajouter-vehicule');
  }
}
