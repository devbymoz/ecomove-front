import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsAuthenticated = new BehaviorSubject<boolean | null>(null);
  user: User | undefined;

  constructor(private router: Router) {}

  login(email: string | null | undefined, password: string | null | undefined) {
    if (email == 'admin@admin.com' && password == 'admin1234') {
      this.userIsAuthenticated.next(true);
      this.user = new User(email, 'admin token', 'user');
      // this.user = new User(email, 'user token', 'user');

      // TODO : Send request to /api/login to fetch user token then store it in localstorage
      localStorage.setItem('user', JSON.stringify({ user: this.user }));

      // Redirection
      if (this.user.getRole() == 'admin')
        this.router.navigateByUrl('admin/liste-de-vehicules');

      if (this.user.getRole() === 'user')
        this.router.navigateByUrl('colab/chercher-un-vehicule');
    } else {
      alert('Identifiants invalides.');
    }
  }

  logout() {
    localStorage.getItem('user') ? localStorage.removeItem('user') : null;
    this.userIsAuthenticated.next(false);
    this.user = undefined;
    this.router.navigateByUrl('login');
  }
}
