import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoPagePage } from './demo-page.page';

describe('DemoPagePage', () => {
  let component: DemoPagePage;
  let fixture: ComponentFixture<DemoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
