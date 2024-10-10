import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user.model';
import { ILoginInterface } from '../../models/Auth/login.interface.js';
import { HttpClient } from '@angular/common/http';
import { ILoginResponseInterface } from '../../models/Auth/login-response.interface.js';
import { environment } from '../../../environments/environment.development.js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlAPIAuth = 'https://localhost:7007';
  userIsAuthenticated = new BehaviorSubject<boolean | null>(null);
  user: User | undefined;
  private _http = inject(HttpClient);

  fetchLogin(
    loginRequest: ILoginInterface
  ): Observable<ILoginResponseInterface> {
    return this._http
      .post<ILoginResponseInterface>(
        `${this.urlAPIAuth}/api/auth/login`,
        loginRequest
      )
      .pipe(map((response) => response));
  }

  logout(): Observable<void> {
    return this._http
      .post<void>(`${this.urlAPIAuth}/api/auth/logout`, {})
      .pipe(map((response) => response));
  }

  fetchRefresh(refreshToken: string): Observable<string> {
    return this._http
      .post<string>(`${this.urlAPIAuth}/refresh`, refreshToken)
      .pipe(map((response) => response));
  }
}
