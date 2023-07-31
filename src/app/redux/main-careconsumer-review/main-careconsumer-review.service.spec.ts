import { TestBed } from '@angular/core/testing';

import { MainCareconsumerReviewService } from './main-careconsumer-review.service';

describe('MainCareconsumerReviewService', () => {
  let service: MainCareconsumerReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareconsumerReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
