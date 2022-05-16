import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SelectModule } from 'philomathcode/modules/select/select.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,SelectModule
  ],exports:[TableComponent]
})
export class TableModule { }
