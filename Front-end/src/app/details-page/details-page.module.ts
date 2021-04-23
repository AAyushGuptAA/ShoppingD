import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPagePageRoutingModule } from './details-page-routing.module';

import { DetailsPagePage } from './details-page.page';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPagePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [DetailsPagePage]
})
export class DetailsPagePageModule {}
