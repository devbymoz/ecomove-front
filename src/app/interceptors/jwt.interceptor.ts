import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service.js';
import { JWTService } from '../services/auth/jwt.service.js';

// Permet d'envoyer une demande de rafraichissement de JWT.
export function jwtInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const jwtService = inject(JWTService);
  const _authApiService = inject(AuthService);
  const router = inject(Router);
  const token = jwtService.getTokenInStorage();
  const refreshToken = jwtService.getRefreshTokenInStorage();

  if (!token) {
    return next(req);
  }

  const headers = req.headers.append('Authorization', `Bearer ${token}`);
  const newReq = req.clone({
    headers,
  });

  return next(newReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Si l'erreur est une erreur d'authentification.
        return handleUnauthorized(req, next);
      } else {
        return throwError(() => error);
      }
    })
  );

  // Fonction pour gérer les erreurs d'authentification et rafraîchir le token
  function handleUnauthorized(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
  ): Observable<HttpEvent<unknown>> {
    return _authApiService.fetchRefresh(refreshToken).pipe(
      switchMap((response: string) => {
        const newAccessToken = response;

        // Si on a un problème de reception du nouveau AccessToken.
        if (!newAccessToken) {
          logout();
          console.error('Issue receiving the new AccessToken.');

          return EMPTY;
        }

        jwtService.saveTokenInStorage(newAccessToken);
        const headers = new HttpHeaders({
          Authorization: `Bearer ${newAccessToken}`,
        });

        const newReq = req.clone({
          headers,
        });

        return next(newReq);
      }),
      catchError((err) => {
        if (err.status == 401) {
          // Si l'erreur est de type 401 c'est que le refreshtoken n'est plus valable.
          logout();
          console.error('Refresh Token is not available.');

          return EMPTY;
        }
        logout();
        console.error('Issue renewing the AccessToken.');

        return EMPTY;
      })
    );
  }

  function logout() {
    // On sauvegarde l'url courante dans une session
    _authApiService.logout().subscribe();
  }
}
