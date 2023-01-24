import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policier3Page } from './policier3.page';

const routes: Routes = [
  {
    path: '',
    component: Policier3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policier3PageRoutingModule {}
