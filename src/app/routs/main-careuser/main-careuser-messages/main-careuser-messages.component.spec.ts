import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesComponent } from './main-careuser-messages.component';

describe('MainCareuserMessagesComponent', () => {
  let component: MainCareuserMessagesComponent;
  let fixture: ComponentFixture<MainCareuserMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
