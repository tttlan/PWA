import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ROUTES } from './modules.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    ROUTES,
    HttpModule
  ],
  providers: [
    // AuthService
  ]
})
export class ModulesModule { }
