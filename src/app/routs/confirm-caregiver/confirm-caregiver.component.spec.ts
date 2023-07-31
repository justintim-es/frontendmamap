import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCaregiverComponent } from './confirm-caregiver.component';

describe('ConfirmCaregiverComponent', () => {
  let component: ConfirmCaregiverComponent;
  let fixture: ComponentFixture<ConfirmCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCaregiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
