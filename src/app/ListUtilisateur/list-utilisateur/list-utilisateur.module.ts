import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUtilisateurPageRoutingModule } from './list-utilisateur-routing.module';

import { ListUtilisateurPage } from './list-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUtilisateurPageRoutingModule
  ],
  declarations: [ListUtilisateurPage]
})
export class ListUtilisateurPageModule {}
