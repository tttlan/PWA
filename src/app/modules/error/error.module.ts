import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorRoutes } from './error.routes';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutes,
    TranslateModule.forChild()
  ],
  entryComponents: [
  ]
})
export class ErrorModule { }
