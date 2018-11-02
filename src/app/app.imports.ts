// Angular core modules
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Third party dependencies
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { NoAuthGuard } from '@app/core/guards/no-auth.guard';
import { AuthService } from '@app/core/services/auth/auth.service';
import { AuthEffects } from '@app/core/store/effects/auth.effects';
import { reducers } from '@app/core/store/app.states';
import { HttpTokenInterceptor, HttpErrorInterceptor } from '@app/core/interceptors';

import { environment } from '@env';

// Shared Services
import { AppService } from '@app/app.service';
import { HttpService } from '@app/core/services/http/http.service';
import { StoreService } from '@app/core/services/store';

import { SharedModule } from '@shared/shared.module';
import { TranslatesService } from '@app/core/translates';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function MetaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.instant(key),
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'APP_NAME',
    defaults: {
      title: 'DEFAULT_TITLE',
      description: 'DEFAULT_META_DESCRIPTION'
    }
  });
}
export function tokenGetter() {
  return localStorage.getItem('accessToken');
}
export const MODULES = [
  BrowserModule.withServerTransition({ appId: 'RapidBox' }),
  BrowserAnimationsModule,
  ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  HttpClientModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  StoreModule.forRoot(reducers, {}),
  EffectsModule.forRoot([AuthEffects]),
  SharedModule.forRoot(),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  MetaModule.forRoot({
    provide: MetaLoader,
    useFactory: MetaFactory,
    deps: [TranslateService]
  }),
  JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter
    }
  })
];

export const PIPES = [
];

export const PROVIDERS = [
  TransferState,
  AppService,
  HttpService,
  StoreService,
  TranslatesService,
  AuthService,
  AuthGuard,
  NoAuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
];

export const COMPONENTS = [
];

export const DIRECTIVES = [
];
