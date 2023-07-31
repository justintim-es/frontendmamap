import { TestBed } from '@angular/core/testing';

import { MainCaregiverProfileService } from './main-caregiver-profile.service';

describe('MainCaregiverProfileService', () => {
  let service: MainCaregiverProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCaregiverProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
