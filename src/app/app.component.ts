import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
import * as javascriptBarcodeReader from 'javascript-barcode-reader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  update: boolean = false;
  joke: any;
  code: any;

  constructor(updates: SwUpdate, private data: DataService) {
    // updates.available.subscribe(event => {
    //   updates.activateUpdate().then(() => document.location.reload());
    // });
  }

  ngOnInit() {
    // this.data.gimmeJokes().subscribe(res => {
    //   this.joke = res;
    // });

    javascriptBarcodeReader(
      Image /* Image file Path || {data: pixelArray, width, height} || HTML5 Canvas ImageData */,
      {
        barcode: 'Codabar',
        type: 'industrial',
      }
    ).then(code => {
      this.code = code;
    });
  }

}
