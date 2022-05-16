import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { InputTestComponent } from './input-test/input-test.component';



@NgModule({
  declarations: [
    InputComponent,
    InputTestComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[InputComponent,InputTestComponent]
})
export class InputModule { }
