import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators/index';
import { setTheme } from 'ngx-bootstrap/utils';
import { Observable } from 'rxjs';

import { TranslatesService } from '@app/core/translates';
import { AppService } from '@app/app.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { StoreService } from '@app/core/services/store';

import { User } from '@app/core/models/user';
import { GetAccount, SetAccount } from '@app/core/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  getState: Observable<any>;
  private routerEvents: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translatesService: TranslatesService,
    private appService: AppService,
    private authService: AuthService,
    private storeService: StoreService
  ) {
    setTheme('bs4');
    this.getState = this.storeService.getState();

    const language = localStorage.getItem('language');
    this.translatesService.useLanguage(language);
  }

  ngOnInit() {
    this.routerEvents = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((route: ActivatedRoute) => {
      this.appService.setPageClass(this.appService.getPageClass());
      this.appService.setPageTitle(this.appService.getPageTitle());
    });

    this.appService.authenticatedUser.subscribe((user: User) => {
      if (user === null && this.authService.getToken !== null) {
        this.storeService.dispatch(new GetAccount());
      }
    });

    this.getState.subscribe((state) => {
      this.appService.setAuthenticatedUser(state.user);
    });
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
    this.appService.authenticatedUser.unsubscribe();
  }
}
