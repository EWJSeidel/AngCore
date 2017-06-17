import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MutualFundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
