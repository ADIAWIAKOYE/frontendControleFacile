import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policier2Page } from './policier2.page';

const routes: Routes = [
  {
    path: '',
    component: Policier2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policier2PageRoutingModule {}
