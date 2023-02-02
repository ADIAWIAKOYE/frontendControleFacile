import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationpolicierPageRoutingModule } from './informationpolicier-routing.module';

import { InformationpolicierPage } from './informationpolicier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationpolicierPageRoutingModule
  ],
  declarations: [InformationpolicierPage]
})
export class InformationpolicierPageModule {}
