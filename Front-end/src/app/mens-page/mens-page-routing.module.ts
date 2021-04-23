import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensPagePage } from './mens-page.page';

const routes: Routes = [
  {
    path: '',
    component: MensPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensPagePageRoutingModule {}
