import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AuthGuard } from '@app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', canActivateChild: [MetaGuard], canActivate: [AuthGuard], children: [
      { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'error', loadChildren: './error/error.module#ErrorModule' }
    ]
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
