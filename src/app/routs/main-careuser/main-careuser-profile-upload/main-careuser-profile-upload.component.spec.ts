import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaregiverProfileUploadComponent } from './main-caregiver-profile-upload.component';

describe('MainCaregiverProfileUploadComponent', () => {
  let component: MainCaregiverProfileUploadComponent;
  let fixture: ComponentFixture<MainCaregiverProfileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCaregiverProfileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCaregiverProfileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
