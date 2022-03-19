import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailGroupPage } from './detail-group.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailGroupPageRoutingModule {}
