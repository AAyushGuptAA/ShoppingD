import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HatPagePageRoutingModule } from './hat-page-routing.module';

import { HatPagePage } from './hat-page.page';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HatPagePageRoutingModule
  ],
  declarations: [HatPagePage, FooterComponent, HeaderComponent]
})
export class HatPagePageModule {}
