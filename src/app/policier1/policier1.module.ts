import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policier1PageRoutingModule } from './policier1-routing.module';

import { Policier1Page } from './policier1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policier1PageRoutingModule
  ],
  declarations: [Policier1Page]
})
export class Policier1PageModule {}
