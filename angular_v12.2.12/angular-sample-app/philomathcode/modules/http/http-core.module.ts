import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCoreService } from './http-core.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[HttpCoreService]
})
export class HttpCoreModule { }
