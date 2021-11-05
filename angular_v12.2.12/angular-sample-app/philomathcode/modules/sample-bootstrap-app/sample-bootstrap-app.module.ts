import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleBootstrapAppComponent } from './sample-bootstrap-app/sample-bootstrap-app.component';
import { MainModule } from '../main/main.module';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { HttpCoreModule } from '../http/http-core.module';
import { TablePageComponent } from './table-page/table-page.component';
import { ComponentPageComponent } from './component-page/component-page.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    SampleBootstrapAppComponent,
    TablePageComponent,
    ComponentPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,MainModule,BootstrapModule,HttpCoreModule
  ],exports:[SampleBootstrapAppComponent,TablePageComponent,
    ComponentPageComponent,
    HomePageComponent]
})
export class SampleBootstrapAppModule { }
