import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JWTService } from '../../services/auth/jwt.service.js';
import { RoleService } from '../../services/auth/role.service.js';

// Empêche l'utilisateur d'accéder à une route s'il est déjà connecté.
export const notLoggedInGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const jwtService = inject(JWTService);
  const roleService = inject(RoleService);

  if (jwtService.isLoginSignal()) {
    if (roleService.isAdmin()) {
      router.navigateByUrl('/admin/liste-de-vehicules');
    } else {
      router.navigateByUrl('/colab/chercher-un-vehicule');
    }
    return false; // Empêche l'accès à la route protégée
  }

  return true;
};
