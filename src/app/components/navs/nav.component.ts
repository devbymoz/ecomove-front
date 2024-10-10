import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderBaseComponent } from '../header-base/header-base.component.js';
import { ButtonComponent } from '../buttons/button/button.component.js';
import { AsyncPipe, NgClass } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service.js';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { JWTService } from '../../services/auth/jwt.service.js';
import { RoleService } from '../../services/auth/role.service.js';

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
  jwtService = inject(JWTService);
  roleService = inject(RoleService);

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        this.jwtService.removeTokenInStorage();
        this.router.navigateByUrl('/login');
      },
    });
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
