import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { NoAuthGuard } from '@app/core/guards/no-auth.guard';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: '', component: AuthComponent, canActivateChild: [MetaGuard], children: [
      { path: 'sign-in', canActivate: [NoAuthGuard], loadChildren: './sign-in/sign-in.module#SignInModule' }
    ]
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
