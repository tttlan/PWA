import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { StoreService } from '@app/core/services/store';
import { SignOut } from '@app/core/store/actions/auth.actions';
import { Observable } from 'rxjs';

export interface Page { route: string; name: string; icon: string; }

export const PAGES = [
  { route: '/', name: 'Dashboard', icon: 'home' },
  { route: 'settings', name: 'Settings', icon: 'settings' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  @HostBinding('class') classList = 'sidebar';
  pages: Page[] = [];
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;

  constructor(
    private appService: AppService,
    private storeService: StoreService
  ) {
    this.getState = this.storeService.getState();
    this.pages = PAGES;
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
    });
  }

  navigate(route: string): void {
    this.appService.toggleSidebar();
  }

  doSignOut() {
    this.appService.toggleSidebar();
    this.storeService.dispatch(new SignOut);
  }
}
