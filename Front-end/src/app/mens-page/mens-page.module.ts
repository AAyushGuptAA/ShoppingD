import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensPagePageRoutingModule } from './mens-page-routing.module';

import { MensPagePage } from './mens-page.page';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensPagePageRoutingModule
  ],
  declarations: [MensPagePage, HeaderComponent, FooterComponent]
})
export class MensPagePageModule {}
