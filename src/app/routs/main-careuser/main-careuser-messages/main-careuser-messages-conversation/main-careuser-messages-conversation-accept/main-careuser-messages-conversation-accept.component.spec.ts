import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationAcceptComponent } from './main-careuser-messages-conversation-accept.component';

describe('MainCareuserMessagesConversationAcceptComponent', () => {
  let component: MainCareuserMessagesConversationAcceptComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
