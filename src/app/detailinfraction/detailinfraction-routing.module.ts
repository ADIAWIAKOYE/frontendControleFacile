import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailinfractionPage } from './detailinfraction.page';

const routes: Routes = [
  {
    path: '',
    component: DetailinfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailinfractionPageRoutingModule {}
