import { NgModule } from '@angular/core';
import { COMPONENTS, MODULES, PIPES, PROVIDERS } from '@app/app.imports';

// App Components
import { AppRoutes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PIPES,
    COMPONENTS
  ],
  imports: [
    MODULES,
    AppRoutes
  ],
  providers: [
    PROVIDERS
  ],
  entryComponents: [
    COMPONENTS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
