import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap, map, switchMap } from 'rxjs/operators/index';
import { StoreService } from '@app/core/services/store';
import {
  AuthActionTypes,
  SignIn, SignInSuccess, SignInFailure,
  SignOut,
  GetAccount, GetAccountFailure, SetAccount
} from '../actions/auth.actions';

import { AuthService } from '@app/core/services/auth/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private storeService: StoreService
  ) { }

  @Effect()
  SignIn: Observable<any> = this.actions
    .ofType(AuthActionTypes.SIGN_IN)
    .pipe(
      map((action: SignIn) => action.payload),
      switchMap(payload => {
        return this.authService.signIn(payload.username, payload.password)
          .pipe(
            map((user) => {
              return new SignInSuccess({ accessToken: user.access_token });
            }),
            catchError((error) => {
              return of(new SignInFailure({ error: error }));
            }));
      })
    );

  @Effect({ dispatch: false })
  SignInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGN_IN_SUCCESS),
    tap((user) => {
      this.authService.setToken(user.payload.accessToken);
      this.storeService.dispatch(new GetAccount());

      this.router.navigate(['/']);

      return of({});
    })
  );

  @Effect({ dispatch: false })
  GetAccount: Observable<any> = this.actions
    .pipe(
      ofType(AuthActionTypes.GET_ACCOUNT),
      map((action: GetAccount) => action),
      switchMap(action => {
        return this.authService.getAccount()
          .pipe(
            map((user) => {
              return this.storeService.dispatch(new SetAccount(user));
            }),
            catchError((error) => {
              return of(new GetAccountFailure({ error: error }));
            }));
      }));

  @Effect({ dispatch: false })
  GetAccountFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_ACCOUNT_FAILURE)
  );

  @Effect({ dispatch: false })
  SignInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGN_IN_FAILURE)
  );

  @Effect({ dispatch: false })
  public SignOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGN_OUT),
    tap((user) => {
      this.authService.removeToken();
      this.router.navigate(['/']);
    })
  );
}
