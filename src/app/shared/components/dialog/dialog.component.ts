import { ViewChild, AfterViewInit, Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})

export class DialogComponent implements AfterViewInit {
  @ViewChild('modal') protected modal: ModalDirective;
  @ViewChild('body', { read: ViewContainerRef }) body;

  public params = {
    title: '',
    description: ''
  };

  public alertMessage = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  // isDialogComponent(component: DialogInterface): component is DialogInterface { //magic happens here
  //    return (<DialogInterface>component) !== undefined;
  // }

  openComponent(component, modalTitle, params = {}) {
    // this.modalTitle = modalTitle;
    // if (params.hasOwnProperty('size')) {
    //   this.modalSize = params['size'];
    // }
    this.createDialogComponent(component, params);
    this.modal.show();
  }

  openAlert(params = {}) {
    return this.createDialogComponent(AlertComponent, params);
  }

  openConfirm(params = {}) {
    return this.createDialogComponent(ConfirmComponent, params);
  }

  createDialogComponent(component, params) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.body.clear();
    const componentRef = this.body.createComponent(factory);
    const instance = componentRef.instance;

    if (typeof instance.setParams === 'function') {
      instance.setParams(params);
    }
    return instance;
  }

  ngAfterViewInit() {
  }

}
