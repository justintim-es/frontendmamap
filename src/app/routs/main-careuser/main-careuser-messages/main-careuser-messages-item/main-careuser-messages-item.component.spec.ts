import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareuserMessagesItemComponent } from './main-careuser-messages-item.component';

describe('MainCareuserMessagesItemComponent', () => {
  let component: MainCareuserMessagesItemComponent;
  let fixture: ComponentFixture<MainCareuserMessagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareuserMessagesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareuserMessagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
