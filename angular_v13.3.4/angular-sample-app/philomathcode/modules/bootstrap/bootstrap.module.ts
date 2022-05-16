import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TableModule } from './table/table.module';
import { ModalModule } from './modal/modal.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,NavbarModule,HeaderModule,FooterModule,TableModule,ModalModule
  ],exports:[NavbarModule,HeaderModule,FooterModule,TableModule,
    ModalModule]
})
export class BootstrapModule { }
