import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailinfractionPage } from './detailinfraction.page';

const routes: Routes = [
  {
    path: '',
    component: DetailinfractionPage
  },
  {
    path: 'information/:idappuser',
    loadChildren: () => import('../information/information.module').then( m => m.InformationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailinfractionPageRoutingModule {}
