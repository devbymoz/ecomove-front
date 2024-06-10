import { Component } from '@angular/core';
import { HeaderBaseComponent } from '../../header-base/header-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';
import { NgClass } from '@angular/common';
import { AuthState } from '../../../store/auth/auth.reducer.js';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from '../../../store/auth/auth.actions.js';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [HeaderBaseComponent, ButtonComponent, NgClass],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css',
})
export class NavAdminComponent {
  authState$: Observable<AuthState>;
  userIsLoggedIn: boolean = false;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.authState$ = this.store.select('auth');

    this.authState$.subscribe(({ user }) => {
      this.userIsLoggedIn = user.isLoggedIn;
    });
  }

  onLogout() {
    this.store.dispatch(logoutAction());
  }
}
