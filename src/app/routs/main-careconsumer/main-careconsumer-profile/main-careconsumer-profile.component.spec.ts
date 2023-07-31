import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerProfileComponent } from './main-careconsumer-profile.component';

describe('MainCareconsumerProfileComponent', () => {
  let component: MainCareconsumerProfileComponent;
  let fixture: ComponentFixture<MainCareconsumerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
