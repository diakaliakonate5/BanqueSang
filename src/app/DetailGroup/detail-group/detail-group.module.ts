import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailGroupPageRoutingModule } from './detail-group-routing.module';

import { DetailGroupPage } from './detail-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailGroupPageRoutingModule
  ],
  declarations: [DetailGroupPage]
})
export class DetailGroupPageModule {}
