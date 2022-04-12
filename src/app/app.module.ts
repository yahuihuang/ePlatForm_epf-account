import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EplatformlibModule } from 'eplatformlib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EplatformlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
