import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WomensPagePage } from './womens-page.page';

describe('WomensPagePage', () => {
  let component: WomensPagePage;
  let fixture: ComponentFixture<WomensPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WomensPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
