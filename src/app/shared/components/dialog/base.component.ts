import { ViewChild, AfterViewInit, Component, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

export class DialogBaseComponent implements AfterViewInit {
  @ViewChild('modal') protected modal: ModalDirective;
  @ViewChild('body', { read: ViewContainerRef }) body;

  public params = {
    title: '',
    description: ''
  };

  public alertMessage = null;

  constructor(
  ) {
  }

  ngAfterViewInit() {
    // Todo: Prevent users from clicking outside to close the modal since that does not set the url properly
    this.modal.config.backdrop = true;
    this.modal.config.ignoreBackdropClick = false;
    this.modal.config.keyboard = false;
    this.modal.show();
  }

  public onCancelAction: Function = () => {
  }

  public onSubmitAction: Function = () => {
  }

  hideModal() {
    this.modal.hide();
  }

  showAlert(data) {
    this.alertMessage = data;
  }

  setParams(params) {
    this.params = params;
  }

  doCancel() {
    this.modal.hide();
    this.onCancelAction();
  }

  onCancel(onCancelAction: Function) {
    this.modal.hide();
    this.onCancelAction = onCancelAction;
  }

  onSubmit(onSubmitAction: Function) {
    this.modal.hide();
    this.onSubmitAction = onSubmitAction;
  }

  doSubmit() {
    this.modal.hide();
    this.onSubmitAction();
  }

}
