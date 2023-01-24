import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Policier2PageRoutingModule } from './policier2-routing.module';

import { Policier2Page } from './policier2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policier2PageRoutingModule
  ],
  declarations: [Policier2Page]
})
export class Policier2PageModule {}
