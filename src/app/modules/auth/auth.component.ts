import { Component, OnInit, HostBinding } from '@angular/core';

import { AppService } from '@app/app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  @HostBinding('class') classList = 'auth';
  isLoading = false;

  constructor(
    private appService: AppService
  ) {
    this.appService.isLoading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
  }
}
