import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html'
})
export class LayoutsComponent implements OnInit {
  pageClass = '';
  isActiveSidebar = false;
  isLoading = false;

  constructor(
    private appService: AppService
  ) {
    this.appService.isLoading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
    this.appService.pageClass.subscribe((pageClass: string) => {
      this.pageClass = pageClass ? 'wrapper--' + pageClass : '';
    });
    this.appService.isActiveSidebar.subscribe((isActiveSidebar: boolean) => {
      this.isActiveSidebar = isActiveSidebar;
    });
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.appService.toggleSidebar();
  }
}
