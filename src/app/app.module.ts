import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { HttpClientModule } from '@angular/common/http';
import { SoegefeltComponent } from './soegefelt/soegefelt.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    SoegefeltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
