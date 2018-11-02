import { Component } from '@angular/core';
import { DialogInterface } from '../dialog.interface';
import { DialogBaseComponent } from '../base.component';

@Component({
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent extends DialogBaseComponent implements DialogInterface {
}
