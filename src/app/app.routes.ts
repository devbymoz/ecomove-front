import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
