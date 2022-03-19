import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPageRoutingModule } from './rendez-vous-routing.module';

import { RendezVousPage } from './rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RendezVousPageRoutingModule
  ],
  declarations: [RendezVousPage]
})
export class RendezVousPageModule {}
