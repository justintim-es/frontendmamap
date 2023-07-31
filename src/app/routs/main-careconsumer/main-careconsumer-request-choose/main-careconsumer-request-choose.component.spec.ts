import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestChooseComponent } from './main-careconsumer-request-choose.component';

describe('MainCareconsumerRequestChooseComponent', () => {
  let component: MainCareconsumerRequestChooseComponent;
  let fixture: ComponentFixture<MainCareconsumerRequestChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerRequestChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerRequestChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
