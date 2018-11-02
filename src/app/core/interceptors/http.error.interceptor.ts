import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators/index';
import { Router } from '@angular/router';

import { AuthService } from '@app/core/services/auth/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this.authService.removeToken();
          this.router.navigate(['/auth/sign-in']);
        }
        return throwError(response);
      }));
  }
}
