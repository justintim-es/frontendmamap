import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCareconsumerReviewComponent } from './main-careconsumer-review.component';

describe('MainCareconsumerReviewComponent', () => {
  let component: MainCareconsumerReviewComponent;
  let fixture: ComponentFixture<MainCareconsumerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCareconsumerReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCareconsumerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
