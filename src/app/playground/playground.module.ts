import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaygroundPageRoutingModule } from './playground-routing.module';

import { PlaygroundPage } from './playground.page';
import { MapActivityPipe } from '../pipes/map-activity.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaygroundPageRoutingModule
  ],
  declarations: [PlaygroundPage, MapActivityPipe]
})
export class PlaygroundPageModule {}
