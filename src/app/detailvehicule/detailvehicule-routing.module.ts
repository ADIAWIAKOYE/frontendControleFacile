import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailvehiculePage } from './detailvehicule.page';

const routes: Routes = [
  {
    path: '',
    component: DetailvehiculePage
  },
  {
    path: 'cartegrise/:idvehicule',
    loadChildren: () => import('../cartegrise/cartegrise.module').then( m => m.CartegrisePageModule)
  },
  {
    path: 'information/:idappuser',
    loadChildren: () => import('../information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'detailinfraction/:idvehicule',
    loadChildren: () => import('../detailinfraction/detailinfraction.module').then( m => m.DetailinfractionPageModule)
  },

    {
    path: 'permisp/:idvehicule',
    loadChildren: () => import('../permisp/permisp.module').then( m => m.PermispPageModule)
  },
  {
    path: 'associerinfraction/:idvehicule',
    loadChildren: () => import('../associerinfraction/associerinfraction.module').then( m => m.AssocierinfractionPageModule)
  },

  // {
  //   path: 'permisp/:idappuser',
  //   loadChildren: () => import('../permisp/permisp.module').then( m => m.PermispPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailvehiculePageRoutingModule {}
