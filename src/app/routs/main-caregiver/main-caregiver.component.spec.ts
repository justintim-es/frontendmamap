import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaregiverComponent } from './main-caregiver.component';

describe('MainCaregiverComponent', () => {
  let component: MainCaregiverComponent;
  let fixture: ComponentFixture<MainCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCaregiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
