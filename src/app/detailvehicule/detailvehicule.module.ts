import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailvehiculePageRoutingModule } from './detailvehicule-routing.module';

import { DetailvehiculePage } from './detailvehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailvehiculePageRoutingModule
  ],
  declarations: [DetailvehiculePage]
})
export class DetailvehiculePageModule {}
