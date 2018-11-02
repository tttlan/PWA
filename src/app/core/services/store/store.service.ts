import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '@app/core/store/app.states';

@Injectable()
export class StoreService {

  isAuthenticated: false;
  user = null;

  constructor(
    private store: Store<AppState>
  ) { }

  getState() {
    return this.store.select(selectAuthState);
  }

  dispatch(action: any): void {
    this.store.dispatch(action);
  }
}
