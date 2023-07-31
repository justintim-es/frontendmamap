import { TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestService } from './main-careconsumer-request.service';

describe('MainCareconsumerRequestService', () => {
  let service: MainCareconsumerRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareconsumerRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
