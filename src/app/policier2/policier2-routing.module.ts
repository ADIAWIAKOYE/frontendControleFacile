import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Policier2Page } from './policier2.page';

const routes: Routes = [
  {
    path: '',
    component: Policier2Page
  },
  // {
  //   path: 'informationpolicier/:idappuser',
  //   loadChildren: () => import('../informationpolicier/informationpolicier.module').then( m => m.InformationpolicierPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Policier2PageRoutingModule {}
