import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCareconsumerComponent } from './register-careconsumer.component';

describe('RegisterCareconsumerComponent', () => {
  let component: RegisterCareconsumerComponent;
  let fixture: ComponentFixture<RegisterCareconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCareconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCareconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
