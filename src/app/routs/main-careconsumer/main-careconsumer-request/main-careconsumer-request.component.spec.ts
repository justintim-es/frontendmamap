import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerRequestComponent } from './main-careconsumer-request.component';

describe('MainCareconsumerRequestComponent', () => {
  let component: MainCareconsumerRequestComponent;
  let fixture: ComponentFixture<MainCareconsumerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
