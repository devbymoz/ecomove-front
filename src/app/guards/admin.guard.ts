import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.user) {
    return authService.user.getRole() === 'admin';
  }
  return false;
};
