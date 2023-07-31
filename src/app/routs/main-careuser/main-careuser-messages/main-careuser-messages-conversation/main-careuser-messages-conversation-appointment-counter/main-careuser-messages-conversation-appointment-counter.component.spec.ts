import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesConversationAppointmentCounterComponent } from './main-careuser-messages-conversation-appointment-counter.component';

describe('MainCareuserMessagesConversationAppointmentCounterComponent', () => {
  let component: MainCareuserMessagesConversationAppointmentCounterComponent;
  let fixture: ComponentFixture<MainCareuserMessagesConversationAppointmentCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesConversationAppointmentCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesConversationAppointmentCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
