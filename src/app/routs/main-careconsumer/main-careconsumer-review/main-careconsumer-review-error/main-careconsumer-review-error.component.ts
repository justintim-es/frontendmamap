import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMainCareconsumerReviewFetchNewError } from 'src/app/redux/main-careconsumer-review/actions';
import { getMainCareconsumerReviewFetchNewError400 } from 'src/app/redux/main-careconsumer-review/selectors';

@Component({
  selector: 'app-main-careconsumer-review-error',
  templateUrl: './main-careconsumer-review-error.component.html',
  styleUrls: ['./main-careconsumer-review-error.component.css']
})
export class MainCareconsumerReviewErrorComponent {
  error: Observable<any>;
  constructor(
    private store: Store
  ) {
    this.error = this.store.select(getMainCareconsumerReviewFetchNewError400("Stars"));
  }
}
