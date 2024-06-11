import { Component, OnDestroy, inject } from '@angular/core';
import { HeaderBaseComponent } from '../../header-base/header-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';
import { NgClass } from '@angular/common';
import { AuthState } from '../../../store/auth/auth.reducer.js';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { logoutAction } from '../../../store/auth/auth.actions.js';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [HeaderBaseComponent, ButtonComponent, NgClass],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css',
})
export class NavAdminComponent implements OnDestroy {
  store = inject(Store<{auth: AuthState}>);
  authState$: Observable<AuthState> = this.store.select("auth");
  authStateSubscription : Subscription;
  userIsLoggedIn: boolean = false;

  constructor() {
    this.authStateSubscription = this.authState$.subscribe(({ user }) => {
      this.userIsLoggedIn = user.isLoggedIn;
    });
  }

  onLogout() {
    this.store.dispatch(logoutAction());
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
