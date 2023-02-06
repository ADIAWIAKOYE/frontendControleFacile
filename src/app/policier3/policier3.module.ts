import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { Policier3PageRoutingModule } from './policier3-routing.module';

import { Policier3Page } from './policier3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Policier3PageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [Policier3Page]
})
export class Policier3PageModule {}
