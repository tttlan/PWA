import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../../dynamic-field.interface';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @HostBinding('class') classList;
  field: DynamicFieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    this.classList = this.field.classList;
  }
}
