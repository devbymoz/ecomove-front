import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../store/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { loginAction } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<{ auth: AuthState }>) {}

  loginUser(email: string, password: string) {
    // Send request to the api to login the user
    // this.http.post("pathToLoginRoute")
    return new Observable((subscriber) => {
      if (email == 'admin' && password == 'admin') {
        // If the request is successful, dispatch an action to login the user
        subscriber.next('ok');
        this.store.dispatch(loginAction());
      } else {
        // If the request is not successful, throw an error
        throw 'Invalid credentials';
      }
    });
  }
}
