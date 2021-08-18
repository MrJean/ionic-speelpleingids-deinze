import { Component, OnInit } from '@angular/core';
import { Playground } from '../interfaces/playground.interface';
import { PlaygroundsService } from '../services/playgrounds.service';
import { ModalController } from '@ionic/angular';
import { ModalFilterComponent } from '../modal/filter/filter.component';
import { CheckForUpdateService } from '../services/check-for-update.service';
import { Activities } from '../enums/activities.enum';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  updateAvailablePromptUpdate$ = this.checkForUpdateService.updateAvailablePromptUpdate$;
  playgrounds: Array<Playground> = this.playgroundsService.getPlaygrounds();
  currentFilterModal: HTMLIonModalElement = null;
  currentFilterValues: any = {
    age: {
      lower: 2,
      upper: 16
    },
    activities: []
  };

  constructor(private checkForUpdateService: CheckForUpdateService, private playgroundsService: PlaygroundsService, public modalController: ModalController) {}

  ngOnInit() {
    for (let activity in Activities) {
      this.currentFilterValues.activities.push({
        key: activity,
        label: Activities[activity],
        isChecked: false // Provide inverse behaviour, all items that are true should be avoided
      })
    }
  }

  async presentFilterModal() {
    const filterModal = await this.modalController.create({
      component: ModalFilterComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'filterValues': this.currentFilterValues
      }
    });
    this.currentFilterModal = filterModal;
    this.currentFilterModal.onDidDismiss().then(res => this.filterPlaygroundsList(res.data.filter));
    return await filterModal.present();
  }

  updateApplication() {
    this.checkForUpdateService.updateApplication();
  }

  private filterPlaygroundsList(filterValues) {
    if (filterValues) {
      this.currentFilterValues = filterValues;
      this.playgrounds = this.playgroundsService.getPlaygrounds(filterValues);
    }
  }
}
