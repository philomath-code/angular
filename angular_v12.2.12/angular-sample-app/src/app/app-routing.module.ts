import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageComponent } from 'philomathcode/modules/sample-bootstrap-app/component-page/component-page.component';
import { HomePageComponent } from 'philomathcode/modules/sample-bootstrap-app/home-page/home-page.component';
import { TablePageComponent } from 'philomathcode/modules/sample-bootstrap-app/table-page/table-page.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'table',component:TablePageComponent},
  {path:'components',component:ComponentPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
