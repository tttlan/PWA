import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ROUTES } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ROUTES,
    TranslateModule.forChild()
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
