import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ILoginInterface } from '../../models/Auth/login.interface.js';
import { JWTService } from '../../services/auth/jwt.service.js';
import { RoleService } from '../../services/auth/role.service.js';
import { AlertComponent } from '../../components/alert/alert.component.js';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  isSubmitted = false;
  private authService = inject(AuthService);
  private _router = inject(Router);
  loginRequest!: ILoginInterface;
  private _jwtService = inject(JWTService);
  private _roleService = inject(RoleService);
  @ViewChild('alertModal') alertModal!: AlertComponent;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.loginRequest = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      };

      this.authService.fetchLogin(this.loginRequest).subscribe({
        next: (response) => {
          const jwt = response.token;
          this._jwtService.saveTokenInStorage(jwt);

          // récupération du role pour la redirection
          if (this._roleService.isAdmin()) {
            this._router.navigateByUrl('/admin/liste-de-vehicules');
          } else {
            this._router.navigateByUrl('/colab/chercher-un-vehicule');
          }

          this.alertModal.show('Vous êtes maintenant connecté', 200);
          setTimeout(() => {
            this.alertModal.hidden();
          }, 5000);
        },
        error: (error) => {
          this.alertModal.show('Il y a une erreur avec vos identifiants', 404);
          setTimeout(() => {
            this.alertModal.hidden();
          }, 5000);
        },
      });
    }
  }
}
