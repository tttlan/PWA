import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  update: boolean = false;
  joke: any;
  @ViewChild(BarecodeScannerLivestreamComponent) BarecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  constructor(updates: SwUpdate, private data: DataService) {
    // updates.available.subscribe(event => {
    //   updates.activateUpdate().then(() => document.location.reload());
    // });
  }

  ngOnInit() {
    // this.data.gimmeJokes().subscribe(res => {
    //   this.joke = res;
    // });
  }

  ngAfterViewInit() {
    this.BarecodeScanner.start();
  }

  onValueChanges(value) {
    this.barcodeValue = value.code;
  }

}
