import { createAction } from '@ngrx/store';
import { LOGIN, LOGOUT } from './auth.constants';

export interface AuthAction {
  type: string;
  payload?: any;
}

export const loginAction = createAction(LOGIN);
export const logoutAction = createAction(LOGOUT);
