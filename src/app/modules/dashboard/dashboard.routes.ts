import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    data: {
      meta: {
        title: 'RapidBox',
        override: true,
        description: 'RapidBox',
        class: 'home'
      }
    },
  },
];

export const ROUTES = RouterModule.forChild(routes);
