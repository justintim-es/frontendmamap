import { TestBed } from '@angular/core/testing';

import { RegisterCareconsumerService } from './register-careconsumer.service';

describe('RegisterCareconsumerService', () => {
  let service: RegisterCareconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCareconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
