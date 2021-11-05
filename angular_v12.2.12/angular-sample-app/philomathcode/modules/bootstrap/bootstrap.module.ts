import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TableModule } from './table/table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,NavbarModule,HeaderModule,FooterModule,TableModule
  ],exports:[NavbarModule,HeaderModule,FooterModule,TableModule]
})
export class BootstrapModule { }
