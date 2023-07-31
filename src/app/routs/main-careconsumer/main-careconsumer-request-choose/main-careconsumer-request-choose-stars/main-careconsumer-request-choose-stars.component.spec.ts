import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestChooseStarsComponent } from './main-careconsumer-request-choose-stars.component';

describe('MainCareconsumerRequestChooseStarsComponent', () => {
  let component: MainCareconsumerRequestChooseStarsComponent;
  let fixture: ComponentFixture<MainCareconsumerRequestChooseStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerRequestChooseStarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerRequestChooseStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
