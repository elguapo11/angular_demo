import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fetch } from './fetch.component'


@NgModule({
  declarations: [
    AppComponent,
    Fetch

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, Fetch]
})
export class AppModule { }
