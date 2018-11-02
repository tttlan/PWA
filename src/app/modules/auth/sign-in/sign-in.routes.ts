import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '', component: SignInComponent,
    data: {
      meta: {
        title: 'RapidBox - Swiss Automotive Group AG',
        override: true,
        // tslint:disable:max-line-length
        description: 'Die Swiss Automotive Group ist eine Unternehmensgruppe im Besitz von zwei Schweizer Familien,die eine komplette Dienstleistungspalette für den Fahrzeugunterhaltsmarkt.'
      }
    },
  },
];

export const ROUTES = RouterModule.forChild(routes);
