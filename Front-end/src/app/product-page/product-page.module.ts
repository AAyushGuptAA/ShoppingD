import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule
  ],
  declarations: [ProductPagePage, FooterComponent, HeaderComponent]
})
export class ProductPagePageModule {}