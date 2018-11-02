import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../../dynamic-field.interface';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {
  @HostBinding('class') classList;
  field: DynamicFieldConfig;
  group: FormGroup;
  constructor() {}

  ngOnInit() {
    this.classList = this.field.classList;
  }
}
