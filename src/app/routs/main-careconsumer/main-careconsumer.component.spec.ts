import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerComponent } from './main-careconsumer.component';

describe('MainCareconsumerComponent', () => {
  let component: MainCareconsumerComponent;
  let fixture: ComponentFixture<MainCareconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
