import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartegrisePage } from './cartegrise.page';

const routes: Routes = [
  {
    path: '',
    component: CartegrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartegrisePageRoutingModule {}
