import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardRefreshComponent } from './onboard-refresh.component';

describe('OnboardRefreshComponent', () => {
  let component: OnboardRefreshComponent;
  let fixture: ComponentFixture<OnboardRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
