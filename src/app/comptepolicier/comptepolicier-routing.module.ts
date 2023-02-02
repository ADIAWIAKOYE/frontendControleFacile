import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptepolicierPage } from './comptepolicier.page';

const routes: Routes = [
  {
    path: '',
    component: ComptepolicierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptepolicierPageRoutingModule {}
