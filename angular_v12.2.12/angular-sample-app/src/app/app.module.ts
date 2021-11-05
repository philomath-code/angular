import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpCoreModule } from 'philomathcode/modules/http/http-core.module';
import { MainModule } from 'philomathcode/modules/main/main.module';
import { SampleBootstrapAppModule } from 'philomathcode/modules/sample-bootstrap-app/sample-bootstrap-app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SampleBootstrapAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
