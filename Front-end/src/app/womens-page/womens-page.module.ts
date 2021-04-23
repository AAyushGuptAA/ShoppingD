import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomensPagePageRoutingModule } from './womens-page-routing.module';

import { WomensPagePage } from './womens-page.page';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomensPagePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [WomensPagePage]
})
export class WomensPagePageModule {}
