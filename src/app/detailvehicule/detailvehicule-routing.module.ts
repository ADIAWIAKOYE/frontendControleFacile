import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailvehiculePage } from './detailvehicule.page';

const routes: Routes = [
  {
    path: '',
    component: DetailvehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailvehiculePageRoutingModule {}
