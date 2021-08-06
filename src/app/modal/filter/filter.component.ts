import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  LOWER_AGE: 2 = 2;
  UPPER_AGE: 16 = 16;

  @Input() filterValues: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  applyFilter() {
    this.modalController.dismiss({
      dismissed: true,
      filter: this.filterValues
    });
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ageChanged($event: Event) {
    // https://forum.ionicframework.com/t/argument-of-type-event-is-not-assignable-to-parameter-of-type-customevent-any/206639
    this.filterValues.age = ($event as CustomEvent).detail.value;
  }

}
