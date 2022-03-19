import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetourNotificationPage } from './retour-notification.page';

const routes: Routes = [
  {
    path: '',
    component: RetourNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetourNotificationPageRoutingModule {}
