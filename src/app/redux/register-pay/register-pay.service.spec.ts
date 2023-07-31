import { TestBed } from '@angular/core/testing';

import { RegisterPayService } from './register-pay.service';

describe('RegisterPayService', () => {
  let service: RegisterPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
