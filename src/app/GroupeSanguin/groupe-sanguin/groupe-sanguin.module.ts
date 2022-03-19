import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupeSanguinPageRoutingModule } from './groupe-sanguin-routing.module';

import { GroupeSanguinPage } from './groupe-sanguin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupeSanguinPageRoutingModule
  ],
  declarations: [GroupeSanguinPage]
})
export class GroupeSanguinPageModule {}
