import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestChooseItemComponent } from './main-careconsumer-request-choose-item.component';

describe('MainCareconsumerRequestChooseItemComponent', () => {
  let component: MainCareconsumerRequestChooseItemComponent;
  let fixture: ComponentFixture<MainCareconsumerRequestChooseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerRequestChooseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerRequestChooseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
