import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DynamicFieldDirective } from './dynamic-field.directive';

import { DynamicFormComponent } from './dynamic-form.component';

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent
  ],
})
export class DynamicFormModule { }
