import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensPagePage } from './mens-page.page';

describe('MensPagePage', () => {
  let component: MensPagePage;
  let fixture: ComponentFixture<MensPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
