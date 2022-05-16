import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { ModalModule } from 'philomathcode/modules/bootstrap/modal/modal.module';
import { HeaderModule } from 'philomathcode/modules/bootstrap/header/header.module';
import { BootstrapModule } from 'philomathcode/modules/bootstrap/bootstrap.module';



@NgModule({
  declarations: [
    ModalPageComponent
  ],
  imports: [
    CommonModule,BootstrapModule
  ],
  exports:[ModalPageComponent]
})
export class ModalPageModule { }
