import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ROUTES } from './sign-in.routes';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    ROUTES,
    TranslateModule.forChild(),
    ModalModule.forRoot()
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule { }
