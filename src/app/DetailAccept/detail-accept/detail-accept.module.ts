import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAcceptPageRoutingModule } from './detail-accept-routing.module';

import { DetailAcceptPage } from './detail-accept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAcceptPageRoutingModule
  ],
  declarations: [DetailAcceptPage]
})
export class DetailAcceptPageModule {}
