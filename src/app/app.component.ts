import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component.js';
import { NavAdminComponent } from './components/navs/nav-admin/nav-admin.component';
import { AuthState } from './store/auth/auth.reducer.js';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateCarpoolComponent } from "./pages/create-carpool/create-carpool.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavAdminComponent, FooterComponent, CreateCarpoolComponent]
})
export class AppComponent {
  authState$: Observable<AuthState>;

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {
    this.authState$ = this.store.select('auth');

    // this.authState$.subscribe((auth) => {
    //   if (auth.user.isLoggedIn) return this.router.navigateByUrl('home');

    //   return this.router.navigateByUrl('login');
    // });
    /* this.authState$.subscribe(({ user }) => {
      if (user.isLoggedIn) return this.router.navigateByUrl('home');

      return this.router.navigateByUrl('login');
    }); */
  }
}
