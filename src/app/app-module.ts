import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './main-app/header/header';
import { Footer } from './main-app/footer/footer';
import { provideHttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    App,
    Header,
    Footer
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
     provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
