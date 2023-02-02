import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssocierinfractionPageRoutingModule } from './associerinfraction-routing.module';

import { AssocierinfractionPage } from './associerinfraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssocierinfractionPageRoutingModule
  ],
  declarations: [AssocierinfractionPage]
})
export class AssocierinfractionPageModule {}
