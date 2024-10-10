import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  tokenKey: string = 'token';
  refreshTokenKey: string = 'refreshToken';
  isLoginSignal = signal<boolean>(false);

  constructor() {
    this.isLoginSignal.set(this.isLogged());
  }
  saveTokenInStorage(token: string) {
    this.isLoginSignal.set(true);
    localStorage.setItem(this.tokenKey, token);
  }

  removeTokenInStorage() {
    this.isLoginSignal.set(false);
    localStorage.removeItem(this.tokenKey);
  }

  getTokenInStorage(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  isLogged(): boolean {
    const token = this.getTokenInStorage();
    const isLoggedIn = token !== '';
    this.isLoginSignal.set(isLoggedIn);
    return isLoggedIn;
  }
}
