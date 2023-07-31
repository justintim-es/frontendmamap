import { TestBed } from '@angular/core/testing';

import { RegisterCaregiverService } from './register-caregiver.service';

describe('RegisterCaregiverService', () => {
  let service: RegisterCaregiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCaregiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
