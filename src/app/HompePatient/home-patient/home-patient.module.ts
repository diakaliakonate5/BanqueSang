import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePatientPageRoutingModule } from './home-patient-routing.module';

import { HomePatientPage } from './home-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePatientPageRoutingModule
  ],
  declarations: [HomePatientPage]
})
export class HomePatientPageModule {}