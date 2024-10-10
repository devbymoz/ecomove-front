import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JWTService } from '../../services/auth/jwt.service.js';

// Empêche l'utilisateur d'accéder à une route s'il n'est pas connecté.
export const loggedInGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const jwtService = inject(JWTService);

  if (jwtService.isLogged()) {
    return true; // On autorise l'accés à la route.
  } else {
    router.navigate(['/login']);
    return false; // Empêche l'accès à la route protégée
  }
};
