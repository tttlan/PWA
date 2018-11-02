import { Component, OnInit } from '@angular/core';

import { AppService } from '@app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  pageTitle: string;

  constructor(
    private appService: AppService
  ) {
    this.appService.pageTitle.subscribe(pageTitle => this.pageTitle = pageTitle);
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.appService.toggleSidebar();
  }
}
