import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptsPage } from './compts.page';

const routes: Routes = [
  {
    path: '',
    component: ComptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptsPageRoutingModule {}
