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
      this.user = new User(email, 'user token', 'admin');
      // this.user = new User(email, 'user token', 'user');

      // TODO : Send request to /api/login to fetch user token then store it in localstorage
      localStorage.setItem('user', JSON.stringify({ user: this.user }));
      this.router.navigateByUrl('home');
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
