import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculePageRoutingModule } from './vehicule-routing.module';

import { VehiculePage } from './vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculePageRoutingModule
  ],
  declarations: [VehiculePage]
})
export class VehiculePageModule {}
