import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationItemComponent } from './main-careuser-messages-conversation-item.component';

describe('MainCareuserMessagesConversationItemComponent', () => {
  let component: MainCareuserMessagesConversationItemComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
