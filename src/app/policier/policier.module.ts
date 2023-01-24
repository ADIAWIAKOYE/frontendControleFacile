import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicierPageRoutingModule } from './policier-routing.module';

import { PolicierPage } from './policier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicierPageRoutingModule
  ],
  declarations: [PolicierPage]
})
export class PolicierPageModule {}
