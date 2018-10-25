import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  update: boolean = false;
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    console.log("ehllo 00000");
    updates.available.subscribe(event => {
      console.log("ehllo");
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());

    })
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }

}
