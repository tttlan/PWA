import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGN_IN = '[Auth] Sign in',
  SIGN_IN_SUCCESS = '[Auth] Sign in Success',
  SIGN_IN_FAILURE = '[Auth] Sign in Failure',
  SIGN_OUT = '[Auth] Sign out',
  SET_ACCOUNT = '[Auth] SetAccount',
  GET_ACCOUNT = '[Auth] GetAccount',
  GET_ACCOUNT_FAILURE = '[Auth] GetAccount Failure'
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGN_IN;
  constructor(public payload: any) {}
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_IN_SUCCESS;
  constructor(public payload: any) {}
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SIGN_IN_FAILURE;
  constructor(public payload: any) {}
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SIGN_OUT;
}

export class SetAccount implements Action {
  readonly type = AuthActionTypes.SET_ACCOUNT;
  constructor(public payload: any) {}
}

export class GetAccount implements Action {
  readonly type = AuthActionTypes.GET_ACCOUNT;
}

export class GetAccountFailure implements Action {
  readonly type = AuthActionTypes.GET_ACCOUNT_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | SignIn
  | SignInSuccess
  | SignInFailure
  | SignOut
  | SetAccount
  | GetAccount
  | GetAccountFailure;
