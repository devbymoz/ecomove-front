import { Routes } from '@angular/router';
import { ErrorsPageComponent } from '../pages/errors-page/errors-page.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

export const commonRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
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
