import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class ModalFilterComponent implements OnInit {

  age = { lower: 2, upper: 16 };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
      filter: {
        age: this.age
      }
    });
  }

  ageChanged($event: CustomEvent) {
    this.age = $event.detail.value;
  }

}
