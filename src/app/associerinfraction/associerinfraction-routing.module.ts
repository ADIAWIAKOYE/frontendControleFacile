import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssocierinfractionPage } from './associerinfraction.page';

const routes: Routes = [
  {
    path: '',
    component: AssocierinfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssocierinfractionPageRoutingModule {}
