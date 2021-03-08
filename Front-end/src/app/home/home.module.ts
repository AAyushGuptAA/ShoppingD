import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HeaderComponent} from 'src/app/header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  // If you generate component import it above and mention it below in declarations metadata, since you're going to use it in home page.
  // If you want to use these component in other page, mention in that page's module.ts similarily.
  declarations: [HomePage, HeaderComponent, FooterComponent]
})
export class HomePageModule {}
