import { Component } from '@angular/core';
import { Playground } from '../interfaces/playground.interface';
import { PlaygroundsService } from '../services/playgrounds.service';
import { ModalController } from '@ionic/angular';
import { ModalFilterComponent } from '../modal/filter/filter.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  playgrounds: Array<Playground> = this.playgroundsService.getPlaygrounds();
  currentFilterModal: HTMLIonModalElement = null;

  constructor(private playgroundsService: PlaygroundsService, public modalController: ModalController) {
  }

  async presentFilterModal() {
    const filterModal = await this.modalController.create({
      component: ModalFilterComponent,
      cssClass: 'my-custom-class'
    });
    this.currentFilterModal = filterModal;
    this.currentFilterModal.onDidDismiss().then(res => this.filterPlaygroundsList(res.data.filter));
    return await filterModal.present();
  }

  private filterPlaygroundsList(filterValues) {
    console.log(filterValues);
    this.playgrounds = this.playgroundsService.getPlaygrounds();
  }
}
