import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationOfferComponent } from './main-careuser-messages-conversation-offer.component';

describe('MainCareuserMessagesConversationOfferComponent', () => {
  let component: MainCareuserMessagesConversationOfferComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
