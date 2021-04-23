import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoPagePageRoutingModule } from './demo-page-routing.module';

import { DemoPagePage } from './demo-page.page';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemoPagePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [DemoPagePage]
})
export class DemoPagePageModule {}
