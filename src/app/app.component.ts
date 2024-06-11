import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component.js';
import { NavAdminComponent } from './components/navs/nav-admin/nav-admin.component';
import { AuthState } from './store/auth/auth.reducer.js';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CreateCarpoolComponent } from "./pages/create-carpool/create-carpool.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavAdminComponent, FooterComponent, CreateCarpoolComponent]
})
export class AppComponent {
  store = inject(Store<{auth: AuthState}>);
  authState$: Observable<AuthState> = this.store.select("auth");
  // authStateSubscription : Subscription;

  constructor(private router: Router) {    
    // this.authStateSubscription = this.authState$.subscribe(({ user }) => {
    //   if (user.isLoggedIn) return this.router.navigateByUrl('home');

    //   return this.router.navigateByUrl('login');
    // });
  }
}
