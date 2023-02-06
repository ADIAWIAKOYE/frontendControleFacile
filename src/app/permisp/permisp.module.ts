import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermispPageRoutingModule } from './permisp-routing.module';

import { PermispPage } from './permisp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermispPageRoutingModule
  ],
  declarations: [PermispPage]
})
export class PermispPageModule {}
