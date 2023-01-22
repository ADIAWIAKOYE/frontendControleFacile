import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermisPageRoutingModule } from './permis-routing.module';

import { PermisPage } from './permis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermisPageRoutingModule
  ],
  declarations: [PermisPage]
})
export class PermisPageModule {}
