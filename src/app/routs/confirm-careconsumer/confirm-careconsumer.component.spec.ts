import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCareconsumerComponent } from './confirm-careconsumer.component';

describe('ConfirmCareconsumerComponent', () => {
  let component: ConfirmCareconsumerComponent;
  let fixture: ComponentFixture<ConfirmCareconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCareconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCareconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
