import { AuthAction } from './auth.actions';
import { LOGIN, LOGOUT } from './auth.constants';

export interface AuthState {
  user: { token: string; isLoggedIn: boolean };
}

const initialState: AuthState = {
  user: {
    token: '',
    isLoggedIn: true,
  },
};

export function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          token: 'ey...9393',
          isLoggedIn: true,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          token: '',
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
}
