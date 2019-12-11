import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebsiteNavbarComponent } from './components/website-navbar/website-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
