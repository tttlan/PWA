// Angualar Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

// Bootstrap components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DialogModule } from '@shared/components/dialog/dialog.module';
// Layouts Components
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    BsDropdownModule.forRoot(),
    DialogModule,
    MatIconModule
  ],
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: []
})
export class LayoutsModule {
}
