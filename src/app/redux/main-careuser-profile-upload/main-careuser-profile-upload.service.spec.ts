import { TestBed } from '@angular/core/testing';

import { MainCaregiverProfileUploadService } from './main-caregiver-profile-upload.service';

describe('MainCaregiverProfileUploadService', () => {
  let service: MainCaregiverProfileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCaregiverProfileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
