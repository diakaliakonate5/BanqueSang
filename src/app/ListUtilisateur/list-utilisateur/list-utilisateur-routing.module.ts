import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUtilisateurPage } from './list-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ListUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUtilisateurPageRoutingModule {}
