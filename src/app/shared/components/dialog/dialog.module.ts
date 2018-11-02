import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DialogComponent } from './dialog.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    TranslateModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  exports: [
    DialogComponent,
    ModalComponent,
    AlertComponent,
    ConfirmComponent
  ],
  declarations: [
    DialogComponent,
    ModalComponent,
    AlertComponent,
    ConfirmComponent
  ],
  entryComponents: [
    DialogComponent,
    ModalComponent,
    AlertComponent,
    ConfirmComponent
  ]
})
export class DialogModule {
}
