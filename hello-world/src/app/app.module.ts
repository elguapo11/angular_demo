import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fetch } from './fetch.component';
import { Weather } from './weather.component';

@NgModule({
  declarations: [AppComponent, Fetch, Weather],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, Fetch, Weather],
})
export class AppModule {}
