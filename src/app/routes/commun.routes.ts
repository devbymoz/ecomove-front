import { Routes } from '@angular/router';
import { ErrorsPageComponent } from '../pages/errors-page/errors-page.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { notLoggedInGuard } from '../guards/not-logged-in/not-logged-in.guard.js';

export const commonRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [notLoggedInGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'page-erreur',
    component: ErrorsPageComponent,
  },
];
