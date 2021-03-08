import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HatPagePage } from './hat-page.page';

const routes: Routes = [
  {
    path: '',
    component: HatPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HatPagePageRoutingModule {}
