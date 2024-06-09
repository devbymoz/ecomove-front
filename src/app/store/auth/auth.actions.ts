import { LOGIN, LOGOUT } from './auth.constants';

export interface AuthAction {
  type: string;
  payload?: any;
}

export const loginAction: AuthAction = { type: LOGIN };
export const logout: AuthAction = { type: LOGOUT };
