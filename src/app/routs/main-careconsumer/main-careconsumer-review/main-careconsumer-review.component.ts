import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacCreate, IAschacDispatch } from 'src/app/redux/combiner';
import { IMainCareconsumerReviewFetchNew, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW } from 'src/app/redux/main-careconsumer-review/actions';
import { getMainCareconsumerReviewFetchNewError400, getMainCareconsumerReviewFetchNewError405, getMainCareconsumerReviewFname, getMainCareconsumerReviewIsFetchFname, getMainCareconsumerReviewIsFetchFnameSuccess, getMainCareconsumerReviewIsFetchNew, getMainCareconsumerReviewIsFetchNewError400, getMainCareconsumerReviewIsFetchNewError405, getMainCareconsumerReviewIsFetchNewSuccess } from 'src/app/redux/main-careconsumer-review/selectors';
import { MainCareconsumerReviewErrorComponent } from './main-careconsumer-review-error/main-careconsumer-review-error.component';

@Component({
  selector: 'app-main-careconsumer-review',
  templateUrl: './main-careconsumer-review.component.html',
  styleUrls: ['./main-careconsumer-review.component.css']
})
export class MainCareconsumerReviewComponent implements OnDestroy {
  rating: number;
  stars: number[];
  routeSub: SubscriptionLike;
  caregiver: string;
  appointmentId: number;
  chatMessageId: number;
  comment: string;
  commentFormControl: FormControl;
  formg: FormGroup;

  isFetchFname: Observable<boolean>;
  isFetchFnameSuccess: Observable<boolean>;
  fName: Observable<string>;
  isFetchNew: Observable<boolean>;
  isFetchNewSuccess: SubscriptionLike;
  isFetchNewCommentError: SubscriptionLike;
  isFetchNewStarsError: SubscriptionLike;
  fetchNewCommentError: Observable<any>;
  isFetchNewError405: SubscriptionLike;
  fetchNewError405: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.rating = 0;
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i);
    };
    this.caregiver = '';
    this.appointmentId = 0;
    this.chatMessageId = 0;
    this.comment = '';
    this.commentFormControl = new FormControl('');
    this.formg = this.fb.group({});
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.caregiver = res.get('caregiver')!;
      this.appointmentId = parseInt(res.get('appointmentId')!);
      this.chatMessageId = parseInt(res.get('chatMessageId')!);
      this.store.dispatch<IAschacDispatch<string>>({
        type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME,
        payload: this.caregiver
      })
    });
    this.isFetchFname = this.store.select(getMainCareconsumerReviewIsFetchFname);
    this.isFetchFnameSuccess = this.store.select(getMainCareconsumerReviewIsFetchFnameSuccess)
    this.fName = this.store.select(getMainCareconsumerReviewFname);
    this.isFetchNew = this.store.select(getMainCareconsumerReviewIsFetchNew);
    this.isFetchNewSuccess = this.store.select(getMainCareconsumerReviewIsFetchNewSuccess).subscribe(res => {
      if (res) this.router.navigate(['/main-careconsumer/messages-conversation/' + this.caregiver ]);
    });

    this.isFetchNewCommentError = this.store.select(getMainCareconsumerReviewIsFetchNewError400("Comment")).subscribe(res => {
      if (res) {
        console.log('commentfromcontrolseterror');
        this.commentFormControl.setErrors({ fourhundred: true });
      }
    });
    this.isFetchNewStarsError = this.store.select(getMainCareconsumerReviewIsFetchNewError400("Stars")).subscribe(res => {
      if (res) {
        this.snack.openFromComponent(MainCareconsumerReviewErrorComponent, {
          duration: 2000,
          panelClass: 'snack',
        })
      }
    });
    this.fetchNewCommentError = this.store.select(getMainCareconsumerReviewFetchNewError400("Comment"));
    this.isFetchNewError405 = this.store.select(getMainCareconsumerReviewIsFetchNewError405).subscribe(res => {
      if (res) this.commentFormControl.setErrors({ fourhundredfive: true });
    });
    this.fetchNewError405 = this.store.select(getMainCareconsumerReviewFetchNewError405);
  }
  starKind(rating: number) {
    this.rating = rating;
  }
  showStar(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else return 'star_border'
  }
  fetchNew() {
    this.store.dispatch<IAschacDispatch<IMainCareconsumerReviewFetchNew>>({ type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW, payload: {
      appId: this.appointmentId,
      caregiver: this.caregiver,
      rating: this.rating,
      comment: this.comment,
      cmId: this.chatMessageId
    }})
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
