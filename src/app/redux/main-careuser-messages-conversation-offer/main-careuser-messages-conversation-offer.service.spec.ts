import { TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationOfferService } from './main-careuser-messages-conversation-offer.service';

describe('MainCareuserMessagesConversationOfferService', () => {
  let service: MainCareuserMessagesConversationOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareuserMessagesConversationOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
