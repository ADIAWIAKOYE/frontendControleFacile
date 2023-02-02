import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationpolicierPage } from './informationpolicier.page';

const routes: Routes = [
  {
    path: '',
    component: InformationpolicierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationpolicierPageRoutingModule {}
