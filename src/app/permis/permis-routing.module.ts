import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermisPage } from './permis.page';

const routes: Routes = [
  {
    path: '',
    component: PermisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisPageRoutingModule {}
