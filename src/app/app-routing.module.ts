import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'compts',
    loadChildren: () => import('./compts/compts.module').then( m => m.ComptsPageModule)
  },
  {
    path: 'permis',
    loadChildren: () => import('./permis/permis.module').then( m => m.PermisPageModule)
  },
  {
    path: 'vehicule',
    loadChildren: () => import('./vehicule/vehicule.module').then( m => m.VehiculePageModule)
  },
  {
    path: 'detailvehicule/:idvehicule',
    loadChildren: () => import('./detailvehicule/detailvehicule.module').then( m => m.DetailvehiculePageModule)
  },
  {
    path: 'modifiervehicule',
    loadChildren: () => import('./modifiervehicule/modifiervehicule.module').then( m => m.ModifiervehiculePageModule)
  },
  {
    path: 'detailinfraction',
    loadChildren: () => import('./detailinfraction/detailinfraction.module').then( m => m.DetailinfractionPageModule)
  },
  {
    path: 'cartegrise',
    loadChildren: () => import('./cartegrise/cartegrise.module').then( m => m.CartegrisePageModule)
  },
  {
    path: 'policier',
    loadChildren: () => import('./policier/policier.module').then( m => m.PolicierPageModule)
  },
  {
    path: 'informationpolicier/:idappuser',
    loadChildren: () => import('./informationpolicier/informationpolicier.module').then( m => m.InformationpolicierPageModule)
  },
  {
    path: 'comptepolicier/:idappuser',
    loadChildren: () => import('./comptepolicier/comptepolicier.module').then( m => m.ComptepolicierPageModule)
  },
  {
    path: 'associerinfraction',
    loadChildren: () => import('./associerinfraction/associerinfraction.module').then( m => m.AssocierinfractionPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'permisp',
    loadChildren: () => import('./permisp/permisp.module').then( m => m.PermispPageModule)
  },
  // {
  //   path: 'policier1',
  //   loadChildren: () => import('./policier1/policier1.module').then( m => m.Policier1PageModule)
  // },
  // {
  //   path: 'policier2',
  //   loadChildren: () => import('./policier2/policier2.module').then( m => m.Policier2PageModule)
  // },
  // {
  //   path: 'policier3',
  //   loadChildren: () => import('./policier3/policier3.module').then( m => m.Policier3PageModule)
  // }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
