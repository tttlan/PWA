import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../../dynamic-field.interface';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  @HostBinding('class') classList;
  field: DynamicFieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    this.classList = this.field.classList;
  }
}
