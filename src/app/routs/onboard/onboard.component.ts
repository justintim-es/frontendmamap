import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IOnboardLink, RDX_ONBOARD_LINK } from 'src/app/redux/onboard/actions';
import { getOnboardFetchError, getOnboardIsFetchError, getOnboardIsFetchSuccess, getOnboardUrl } from 'src/app/redux/onboard/selectors';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnDestroy {
  isFetchSuccess: Observable<boolean>;
  url: Observable<string>;
  isFetchError: Observable<boolean>;
  fetchError: Observable<any>;
  routeSub: SubscriptionLike;
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.isFetchSuccess = this.store.select(getOnboardIsFetchSuccess);
    this.url = this.store.select(getOnboardUrl);
    this.isFetchError = this.store.select(getOnboardIsFetchError);
    this.fetchError = this.store.select(getOnboardFetchError);
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.store.dispatch<IAschacDispatch<IOnboardLink>>({
        type: RDX_ONBOARD_LINK,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      });
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
