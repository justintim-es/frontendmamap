import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IConfirmCareconsumerFetch, IConfirmCareconsumerFetchError400, RDX_CONFIRM_CARECONSUMER_FETCH } from 'src/app/redux/confirm-careconsumer/actions';
import { getConfirmCareconsumerFetchError400, getConfirmCareconsumerFetchError422, getConfirmCareconsumerIsFetch, getConfirmCareconsumerIsFetchError400, getConfirmCareconsumerIsFetchError422, getConfirmCareconsumerIsFetchSuccess, getConfirmCareconsumerIsRouteLogin } from 'src/app/redux/confirm-careconsumer/selectors';

@Component({
  selector: 'app-confirm-careconsumer',
  templateUrl: './confirm-careconsumer.component.html',
  styleUrls: ['./confirm-careconsumer.component.css']
})
export class ConfirmCareconsumerComponent implements OnDestroy {
  routeSub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError400: Observable<boolean>;
  isFetchError422: Observable<boolean>;
  fetchError400: Observable<IConfirmCareconsumerFetchError400>;
  fetchError422: Observable<any>;
  isRouteLogin: SubscriptionLike;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isFetch = this.store.select(getConfirmCareconsumerIsFetch);
    this.isFetchSuccess = this.store.select(getConfirmCareconsumerIsFetchSuccess);
    this.isFetchError400 = this.store.select(getConfirmCareconsumerIsFetchError400);
    this.isFetchError422 = this.store.select(getConfirmCareconsumerIsFetchError422);
    this.fetchError400 = this.store.select(getConfirmCareconsumerFetchError400);
    this.fetchError422 = this.store.select(getConfirmCareconsumerFetchError422)
    this.isRouteLogin = this.store.select(getConfirmCareconsumerIsRouteLogin).subscribe(res => {
      if (res) this.router.navigate(['/login']);
    });
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.store.dispatch<IAschacDispatch<IConfirmCareconsumerFetch>>({
        type: RDX_CONFIRM_CARECONSUMER_FETCH,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      })
    })
  }
  ngOnDestroy(): void {
    this.isRouteLogin.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
