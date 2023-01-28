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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculePageRoutingModule {}
