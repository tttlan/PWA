import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@app/core/services/auth/auth.service';
import { environment } from '@env';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {};

    const accessToken = this.authService.getToken;

    if (accessToken) {
      headersConfig['Authorization'] = 'Bearer ' + accessToken;
    } else {
      headersConfig['Authorization'] = 'Basic ' +  btoa(environment.authorization.username + ':' + environment.authorization.password);
    }

    request = request.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
