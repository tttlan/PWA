import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// import { AuthService } from './services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { ROUTES } from './auth.routes';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    ROUTES,
    TranslateModule.forChild(),
    HttpModule
  ],
  providers: [
    // AuthService
  ]
})
export class AuthModule { }
