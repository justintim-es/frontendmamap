import { TestBed } from '@angular/core/testing';

import { MainCareconsumerProfileService } from './main-careconsumer-profile.service';

describe('MainCareconsumerProfileService', () => {
  let service: MainCareconsumerProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareconsumerProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
