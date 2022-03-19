import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAcceptPage } from './detail-accept.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAcceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAcceptPageRoutingModule {}
