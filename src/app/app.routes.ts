import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from '@shared/layouts/layouts.component';

const ROUTES: Routes = [
  {
    path: '', component: LayoutsComponent, children: [
      { path: '', loadChildren: './modules/modules.module#ModulesModule' }
    ]
  },
  {
    path: 'auth', children: [
      { path: '', loadChildren: './modules/auth/auth.module#AuthModule' },
    ]
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];
/*
 * initialNavigation: enabled -> for one load page, without reload
 */
export const AppRoutes = RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' });
