import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundPage } from './playground.page';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundPageRoutingModule {}
