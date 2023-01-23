import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartegrisePageRoutingModule } from './cartegrise-routing.module';

import { CartegrisePage } from './cartegrise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartegrisePageRoutingModule
  ],
  declarations: [CartegrisePage]
})
export class CartegrisePageModule {}
