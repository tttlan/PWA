import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { User } from '@app/core/models/user';
import { AppState, selectAuthState } from '@app/core/store/app.states';
import { SignIn } from '@app/core/store/actions/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;
  form: FormGroup;

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  showPassword = false;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required])
    });
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
      if (this.errorMessage !== null) {
        this.modal.show();
      }
    });
  }

  doSignIn({ value, valid }: { value, valid: boolean }) {
    if (!valid) {
      return;
    }
    const payload = {
      username: value.username,
      password: value.password
    };
    this.store.dispatch(new SignIn(payload));
  }

  showHidePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
