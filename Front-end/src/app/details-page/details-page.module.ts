import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPagePageRoutingModule } from './details-page-routing.module';

import { DetailsPagePage } from './details-page.page';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPagePageRoutingModule
  ],
  declarations: [DetailsPagePage, HeaderComponent, FooterComponent]
})
export class DetailsPagePageModule {}
