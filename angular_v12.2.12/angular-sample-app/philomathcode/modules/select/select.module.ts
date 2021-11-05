import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { SelectTestComponent } from './select-test/select-test.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectComponent,
    SelectTestComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[SelectComponent,
    SelectTestComponent]
})
export class SelectModule { }
