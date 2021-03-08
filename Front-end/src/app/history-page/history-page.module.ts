import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPagePageRoutingModule } from './history-page-routing.module';

import { HistoryPagePage } from './history-page.page';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPagePageRoutingModule
  ],
  declarations: [HistoryPagePage, HeaderComponent, FooterComponent]
})
export class HistoryPagePageModule {}
