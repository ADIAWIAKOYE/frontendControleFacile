import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policier1Page } from './policier1.page';

const routes: Routes = [
  {
    path: '',
    component: Policier1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policier1PageRoutingModule {}
