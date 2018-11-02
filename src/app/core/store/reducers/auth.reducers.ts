import { User } from '@app/core/models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.error.error.error_description
      };
    }
    case AuthActionTypes.GET_ACCOUNT: {
      return state;
    }
    case AuthActionTypes.SET_ACCOUNT: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.GET_ACCOUNT_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.error.error.error
      };
    }
    case AuthActionTypes.SIGN_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
