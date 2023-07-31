import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerProfileAppointmentComponent } from './main-careconsumer-profile-appointment.component';

describe('MainCareconsumerProfileAppointmentComponent', () => {
  let component: MainCareconsumerProfileAppointmentComponent;
  let fixture: ComponentFixture<MainCareconsumerProfileAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerProfileAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerProfileAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
