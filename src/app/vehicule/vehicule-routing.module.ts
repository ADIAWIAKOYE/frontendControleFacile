import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculePage } from './vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculePage
  },

  {
    path: 'detailvehicule/:idvehicule',
    loadChildren: () => import('../detailvehicule/detailvehicule.module').then( m => m.DetailvehiculePageModule)
  },

  {
    path: 'modifiervehicule/:idvehicule',
    loadChildren: () => import('../modifiervehicule/modifiervehicule.module').then( m => m.ModifiervehiculePageModule)
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
export class VehiculePageRoutingModule {}
