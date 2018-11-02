import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '@app/core/models/user';

@Injectable()
export class AppService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isActiveSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pageTitle: Subject<string> = new Subject();
  pageClass: Subject<string> = new Subject();
  authenticatedUser: Subject<User> = new Subject();

  constructor(
    private router: Router
  ) {
  }

  setAuthenticatedUser(authenticatedUser: User) {
    this.authenticatedUser.next(authenticatedUser);
  }

  setLoadingStatus(isLoading: boolean) {
    this.isLoading.next(isLoading);
  }

  setPageTitle(pageTitle: string) {
    this.pageTitle.next(pageTitle);
  }

  setPageClass(pageClass: string) {
    this.pageClass.next(pageClass);
  }

  getPageClass(): string {
    return this.getRouteData('class');
  }

  getPageTitle(): string {
    return this.getRouteData('title');
  }

  toggleSidebar() {
    this.isActiveSidebar.next(!this.isActiveSidebar.value);
  }

  private getRouteData(data: string): any {
    const root = this.router.routerState.snapshot.root;

    if (this.lastChild(root).data.hasOwnProperty('meta')) {
      return this.lastChild(root).data.meta[data];
    }

    return;
  }

  private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.lastChild(route.firstChild);
    } else {
      return route;
    }
  }
}
