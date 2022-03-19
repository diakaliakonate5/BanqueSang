import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanqueSangPage } from './banque-sang.page';

const routes: Routes = [
  {
    path: '',
    component: BanqueSangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanqueSangPageRoutingModule {}
