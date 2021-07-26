import { Component } from '@angular/core';
import { Playground } from '../interfaces/playground.interface';
import { PlaygroundsService } from '../services/playgrounds.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  playgrounds: Array<Playground> = this.playgroundsService.getPlaygrounds();

  constructor(private playgroundsService: PlaygroundsService) {

  }

}
