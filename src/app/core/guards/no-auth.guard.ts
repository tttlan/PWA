import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router
  ) {}
  canActivate(): boolean {
    if (this.auth.getToken) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
