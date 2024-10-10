import { inject, Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { ROLES } from '../../models/Auth/roles.constants.js';
import { JWTService } from './jwt.service.js';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private _jwtService: JWTService = inject(JWTService);
  isAdminSignal = signal<boolean>(false);

  constructor() {
    this.isAdminSignal.set(this.isAdmin());
  }

  // Récupération des rôles de l'utilisateur dans l'AccessToken ou retourne un tableau vide.
  getUserRoles(): string[] {
    const token = this._jwtService.getTokenInStorage();

    if (!token) return [];

    const decodedToken: any = jwtDecode(token);
    const roles = decodedToken.role;
    return roles || [];
  }

  // Vérifie si l'utilisateur a le rôle requis.
  isInRole(role: string): boolean {
    const roles = this.getUserRoles();

    return roles.includes(role);
  }

  isAdmin(): boolean {
    if (this.isInRole(ROLES.ADMIN)) {
      this.isAdminSignal.set(true);
      return this.isAdminSignal();
    } else {
      this.isAdminSignal.set(false);
      return this.isAdminSignal();
    }
  }

  isUser(): boolean {
    if (this.isInRole(ROLES.USER)) {
      return true;
    } else {
      return false;
    }
  }
}
