import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../../dynamic-field.interface';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {
  @HostBinding('class') classList;
  field: DynamicFieldConfig;
  group: FormGroup;
  constructor() {}

  ngOnInit() {
    this.classList = this.field.classList;
  }
}
