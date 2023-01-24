import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicierPage } from './policier.page';

const routes: Routes = [

  {
    path: '',
    component: PolicierPage,

    children: [
      {
        path: 'policier1',
        loadChildren: () => import('../policier1/policier1.module').then(m => m.Policier1PageModule)
      },
      {
        path: 'policier2',
        loadChildren: () => import('../policier2/policier2.module').then(m => m.Policier2PageModule)
      },
      {
        path: 'policier3',
        loadChildren: () => import('../policier3/policier3.module').then(m => m.Policier3PageModule)
      },
      {
        path: '',
        redirectTo: '/policier/policier1',
        pathMatch: 'full'
      }
    ]

  },

  {
    path: '',
    redirectTo: '/policier1',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicierPageRoutingModule {}
