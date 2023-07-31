import { TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationService } from './main-careuser-messages-conversation.service';

describe('MainCareuserMessagesConversationService', () => {
  let service: MainCareuserMessagesConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCareuserMessagesConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
