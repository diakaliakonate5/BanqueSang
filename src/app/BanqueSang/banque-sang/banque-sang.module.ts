import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanqueSangPageRoutingModule } from './banque-sang-routing.module';

import { BanqueSangPage } from './banque-sang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanqueSangPageRoutingModule
  ],
  declarations: [BanqueSangPage]
})
export class BanqueSangPageModule {}
