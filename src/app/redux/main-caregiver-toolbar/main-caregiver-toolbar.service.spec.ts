import { TestBed } from '@angular/core/testing';

import { MainCaregiverToolbarService } from './main-caregiver-toolbar.service';

describe('MainCaregiverToolbarService', () => {
  let service: MainCaregiverToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCaregiverToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
