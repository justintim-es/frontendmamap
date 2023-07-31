import { TestBed } from '@angular/core/testing';

import { ConfirmCareconsumerService } from './confirm-careconsumer.service';

describe('ConfirmCareconsumerService', () => {
  let service: ConfirmCareconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmCareconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
