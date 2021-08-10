import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from '../interfaces/playground.interface';
import { PlaygroundsService } from '../services/playgrounds.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
})
export class PlaygroundPage implements OnInit {

  playground: Playground;

  constructor(private route: ActivatedRoute, private playgroundService: PlaygroundsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const playgroundId: number = parseInt(params['id']);
      this.playground = this.playgroundService.getPlayground(playgroundId);
    });
  }

}
