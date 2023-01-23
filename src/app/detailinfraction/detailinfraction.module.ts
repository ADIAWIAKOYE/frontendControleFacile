import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailinfractionPageRoutingModule } from './detailinfraction-routing.module';

import { DetailinfractionPage } from './detailinfraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailinfractionPageRoutingModule
  ],
  declarations: [DetailinfractionPage]
})
export class DetailinfractionPageModule {}
