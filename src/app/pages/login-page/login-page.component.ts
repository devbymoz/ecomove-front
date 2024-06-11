import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth/auth.reducer';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnDestroy{
  email: string = '';
  password: string = '';
  
  store = inject(Store<{auth: AuthState}>);
  authState$: Observable<AuthState> = this.store.select("auth");
  authStateSubscription : Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.authStateSubscription = this.authState$.subscribe(({ user }) => {
      if (user.isLoggedIn) return this.router.navigateByUrl('home');

      return this.router.navigateByUrl('login');
    });
  }

  onLogin(loginForm: NgForm) {
    if (!loginForm.valid) {
      alert('Identifiants invalides');
    }

    const { email, password } = loginForm.value;

    this.authService.loginUser(email, password).subscribe({
      next: () => {
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        alert(`Something went wrong, Error : ${err}`);
      },
    });
  }


  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
