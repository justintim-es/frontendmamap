import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IConfirmCaregiverFetch, IConfirmCaregiverFetchError400, RDX_CONFIRM_CAREGIVER_FETCH, RDX_CONFIRM_CAREGIVER_FETCH_RESEND, RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR } from 'src/app/redux/confirm-caregiver/actions';
import { getConfirmCaregiverFetchError400, getConfirmCaregiverFetchError422, getConfirmCaregiverFetchResendError, getConfirmCaregiverIsFetch, getConfirmCaregiverIsFetchError400, getConfirmCaregiverIsFetchError422, getConfirmCaregiverIsFetchResend, getConfirmCaregiverIsFetchResendSuccess, getConfirmCaregiverIsFetchSuccess, getConfirmCaregiverIsRouteLogin } from 'src/app/redux/confirm-caregiver/selectors';

@Component({
  selector: 'app-confirm-caregiver',
  templateUrl: './confirm-caregiver.component.html',
  styleUrls: ['./confirm-caregiver.component.css']
})
export class ConfirmCaregiverComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError400: Observable<boolean>;
  isFetchError422: Observable<boolean>;
  fetchError400: Observable<IConfirmCaregiverFetchError400>;
  fetchError422: Observable<any>;
  isFetchResend: Observable<boolean>;
  isFetchResendSuccess: Observable<boolean>;
  isRouteLogin: SubscriptionLike;
  id!: string;
  routeSub: SubscriptionLike;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.isFetch = this.store.select(getConfirmCaregiverIsFetch);
    this.isFetchSuccess = this.store.select(getConfirmCaregiverIsFetchSuccess);
    this.isFetchError400 = this.store.select(getConfirmCaregiverIsFetchError400);
    this.isFetchError422 = this.store.select(getConfirmCaregiverIsFetchError422);
    this.fetchError400 = this.store.select(getConfirmCaregiverFetchError400);
    this.fetchError422 = this.store.select(getConfirmCaregiverFetchError422);
    this.isFetchResend = this.store.select(getConfirmCaregiverIsFetchResend);
    this.isFetchResendSuccess = this.store.select(getConfirmCaregiverIsFetchResendSuccess);
    this.isRouteLogin = this.store.select(getConfirmCaregiverIsRouteLogin).subscribe(res => {
      if (res) this.router.navigate(['/login']);
    })
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.id = res.get('id')!;
      this.store.dispatch<IAschacDispatch<IConfirmCaregiverFetch>>({
        type: RDX_CONFIRM_CAREGIVER_FETCH,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      })
    })
  }
  sendtoken() {
    this.store.dispatch<IAschacDispatch<string>>({
      type: RDX_CONFIRM_CAREGIVER_FETCH_RESEND,
      payload: this.id
    })
  }
}
