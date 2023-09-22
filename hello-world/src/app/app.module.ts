import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fetch } from './fetch.component';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [AppComponent, Fetch, MessageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, Fetch, MessageComponent],
})
export class AppModule {}
