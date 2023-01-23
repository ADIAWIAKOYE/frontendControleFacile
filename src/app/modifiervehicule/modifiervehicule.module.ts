import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiervehiculePageRoutingModule } from './modifiervehicule-routing.module';

import { ModifiervehiculePage } from './modifiervehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiervehiculePageRoutingModule
  ],
  declarations: [ModifiervehiculePage]
})
export class ModifiervehiculePageModule {}
