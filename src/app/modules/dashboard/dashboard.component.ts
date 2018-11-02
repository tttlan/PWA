import { Component, OnInit } from '@angular/core';
import { SECTION, SECTIONS } from './dashboard.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  sections: SECTION[] = [];

  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(
  ) {
    this.sections = SECTIONS;
  }

  ngOnInit() {
  }

  doSignOut(): void {
  }

}
