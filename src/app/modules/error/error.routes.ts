import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '', component: ErrorComponent,
    data: {
      meta: {
        title: 'Error',
        override: true,
        description: 'The page you are looking for does not exist or has been moved.'
      }
    }
  }
];

export const ErrorRoutes = RouterModule.forChild(routes);
