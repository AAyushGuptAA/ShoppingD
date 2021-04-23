import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HatPagePageRoutingModule } from './hat-page-routing.module';

import { HatPagePage } from './hat-page.page';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HatPagePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [HatPagePage]
})
export class HatPagePageModule {}
