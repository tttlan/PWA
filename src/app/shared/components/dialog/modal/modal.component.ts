///<reference path='../dialog.interface.ts'/>
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap';

import { DialogInterface } from '../dialog.interface';
import { DialogBaseComponent } from '../base.component';

@Component({
  templateUrl: './modal.component.html'
})

export class ModalComponent extends DialogBaseComponent implements DialogInterface {

  modalTitle = '';
  modalSize = 'modal-lg';
}
