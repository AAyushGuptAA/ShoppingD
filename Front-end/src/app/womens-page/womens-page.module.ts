import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomensPagePageRoutingModule } from './womens-page-routing.module';

import { WomensPagePage } from './womens-page.page';

import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomensPagePageRoutingModule
  ],
  declarations: [WomensPagePage, HeaderComponent, FooterComponent]
})
export class WomensPagePageModule {}
