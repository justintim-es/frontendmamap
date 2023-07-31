import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaregiverProfileComponent } from './main-caregiver-profile.component';

describe('MainCaregiverProfileComponent', () => {
  let component: MainCaregiverProfileComponent;
  let fixture: ComponentFixture<MainCaregiverProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCaregiverProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCaregiverProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
