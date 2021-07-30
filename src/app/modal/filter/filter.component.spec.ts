import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: ModalFilterComponent;
  let fixture: ComponentFixture<ModalFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFilterComponent);
    component = fixture.componentInstance;
    component.filterValues = {
      age: {
        lower: 2,
        upper: 16
      }
    }
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
