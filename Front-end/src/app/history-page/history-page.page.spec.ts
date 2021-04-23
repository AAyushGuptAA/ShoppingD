import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryPagePage } from './history-page.page';

describe('HistoryPagePage', () => {
  let component: HistoryPagePage;
  let fixture: ComponentFixture<HistoryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
