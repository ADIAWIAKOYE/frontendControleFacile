import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationPage } from './information.page';

const routes: Routes = [
  {
    path: '',
    component: InformationPage
  },

  // {
  //   path: 'compts/:idappuser',
  //   loadChildren: () => import('../compts/compts.module').then( m => m.ComptsPageModule)
  // },

  // {
  //   path: '/:idappuser',
  //   loadChildren: () => import('../information/information.module').then( m => m.InformationPageModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationPageRoutingModule {}
