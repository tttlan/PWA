import { Component } from '@angular/core';
import { DialogInterface } from '../dialog.interface';
import { DialogBaseComponent } from '../base.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent extends DialogBaseComponent implements DialogInterface {
}
