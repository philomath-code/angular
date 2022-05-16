import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInput } from './classes/modal-input';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { SimpleModalTestComponent } from './simple-modal-test/simple-modal-test.component';



@NgModule({
  declarations: [
  
    SimpleModalComponent,
            SimpleModalTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SimpleModalComponent,SimpleModalTestComponent]
})
export class ModalModule { }
