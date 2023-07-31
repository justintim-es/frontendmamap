import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerReviewErrorComponent } from './main-careconsumer-review-error.component';

describe('MainCareconsumerReviewErrorComponent', () => {
  let component: MainCareconsumerReviewErrorComponent;
  let fixture: ComponentFixture<MainCareconsumerReviewErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerReviewErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerReviewErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
