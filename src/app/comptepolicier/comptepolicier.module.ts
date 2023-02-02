import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptepolicierPageRoutingModule } from './comptepolicier-routing.module';

import { ComptepolicierPage } from './comptepolicier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptepolicierPageRoutingModule
  ],
  declarations: [ComptepolicierPage]
})
export class ComptepolicierPageModule {}
