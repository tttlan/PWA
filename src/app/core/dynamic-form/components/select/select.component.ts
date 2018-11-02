import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../../dynamic-field.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  @HostBinding('class') classList;
  field: DynamicFieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    this.classList = this.field.classList;
  }
}
