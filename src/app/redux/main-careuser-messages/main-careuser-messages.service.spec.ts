import { TestBed } from '@angular/core/testing';

import { MainCareuserMessagesService } from './main-careuser-messages.service';

describe('MainCareuserMessagesService', () => {
  let service: MainCareuserMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareuserMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
