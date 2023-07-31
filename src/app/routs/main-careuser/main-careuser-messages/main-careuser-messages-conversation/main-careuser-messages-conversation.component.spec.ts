import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationComponent } from './main-careuser-messages-conversation.component';

describe('MainCareuserMessagesConversationComponent', () => {
  let component: MainCareuserMessagesConversationComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
