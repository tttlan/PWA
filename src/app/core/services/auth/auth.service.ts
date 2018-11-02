import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { User } from '@app/core/models/user';
import { HttpService } from '@app/core/services/http/http.service';

@Injectable()
export class AuthService {

  constructor(
    private httpService: HttpService,
    private jwtHelper: JwtHelperService
  ) { }

  get getToken(): string {
    return this.jwtHelper.tokenGetter();
  }

  get getDecodedToken(): any {
    return this.jwtHelper.decodeToken(this.getToken);
  }

  signIn(username: string, password: string): Observable<any> {
    const body = 'grant_type=password' +
      '&' + 'scope=read write' +
      '&' + 'affiliate=derendinger-at' +
      '&' + 'username=' + username +
      '&' + 'password=' + password;
    return this.httpService.post('auth-server/oauth/token', body,
      { basicAuthorization: true, contentType: 'application/x-www-form-urlencoded' }
    );
  }

  getAccount(): Observable<User> {
    return this.httpService.get('rest-ax/user/detail');
  }

  setToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  removeToken(): void {
    localStorage.removeItem('accessToken');
  }
}
