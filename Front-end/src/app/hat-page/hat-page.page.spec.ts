import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HatPagePage } from './hat-page.page';

describe('HatPagePage', () => {
  let component: HatPagePage;
  let fixture: ComponentFixture<HatPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
