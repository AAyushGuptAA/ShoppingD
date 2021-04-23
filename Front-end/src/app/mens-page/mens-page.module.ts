import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensPagePageRoutingModule } from './mens-page-routing.module';

import { MensPagePage } from './mens-page.page';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensPagePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [MensPagePage]
})
export class MensPagePageModule {}
