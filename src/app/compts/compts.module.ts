import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptsPageRoutingModule } from './compts-routing.module';

import { ComptsPage } from './compts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptsPageRoutingModule
  ],
  declarations: [ComptsPage]
})
export class ComptsPageModule {}
