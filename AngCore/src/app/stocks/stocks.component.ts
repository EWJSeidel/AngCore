import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  title = "Here's some stocks:";

  stocks = ['Apple', 'Google', 'IBM'];

  constructor() { }

  ngOnInit() {
  }

}
