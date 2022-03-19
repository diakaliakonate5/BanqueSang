import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupeSanguinPage } from './groupe-sanguin.page';

const routes: Routes = [
  {
    path: '',
    component: GroupeSanguinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupeSanguinPageRoutingModule {}
