import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationAdjustComponent } from './main-careuser-messages-conversation-adjust.component';

describe('MainCareuserMessagesConversationAdjustComponent', () => {
  let component: MainCareuserMessagesConversationAdjustComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationAdjustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
