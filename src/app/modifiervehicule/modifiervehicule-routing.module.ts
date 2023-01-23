import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiervehiculePage } from './modifiervehicule.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiervehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiervehiculePageRoutingModule {}
