import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleBootstrapAppComponent } from './sample-bootstrap-app/sample-bootstrap-app.component';
import { MainModule } from '../main/main.module';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { HttpCoreModule } from '../http/http-core.module';
import { TablePageComponent } from './table-page/table-page.component';
import { ComponentPageComponent } from './component-page/component-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { InputPageComponent } from './input-page/input-page.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { ModalPageModule } from './modal-page/modal-page.module';



@NgModule({
  declarations: [
    SampleBootstrapAppComponent,
    TablePageComponent,
    ComponentPageComponent,
    HomePageComponent,
    GithubReposComponent,
    InputPageComponent,
    SelectPageComponent
  ],
  imports: [
    CommonModule,MainModule,BootstrapModule,HttpCoreModule,ModalPageModule
  ],exports:[SampleBootstrapAppComponent,TablePageComponent,
    ComponentPageComponent,
    HomePageComponent,GithubReposComponent,ModalPageModule]
})
export class SampleBootstrapAppModule { }
