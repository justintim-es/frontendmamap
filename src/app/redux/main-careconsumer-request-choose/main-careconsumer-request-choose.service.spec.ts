import { TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestChooseService } from './main-careconsumer-request-choose.service';

describe('MainCareconsumerRequestChooseService', () => {
  let service: MainCareconsumerRequestChooseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareconsumerRequestChooseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
