import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomensPagePage } from './womens-page.page';

const routes: Routes = [
  {
    path: '',
    component: WomensPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomensPagePageRoutingModule {}
