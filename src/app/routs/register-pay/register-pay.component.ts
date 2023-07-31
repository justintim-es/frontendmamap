import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IRegisterPayLink, RDX_REGISTER_PAY_LINK } from 'src/app/redux/register-pay/actions';
import { getRegisterPayFetchError, getRegisterPayIsFetch, getRegisterPayIsFetchError, getRegisterPayIsFetchSuccess, getRegisterPayUrl } from 'src/app/redux/register-pay/selectors';

@Component({
  selector: 'app-register-pay',
  templateUrl: './register-pay.component.html',
  styleUrls: ['./register-pay.component.css']
})
export class RegisterPayComponent implements OnDestroy {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchError: Observable<any>;
  url: Observable<string>;
  routeSub: SubscriptionLike;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.isFetch = this.store.select(getRegisterPayIsFetch);
    this.isFetchSuccess = this.store.select(getRegisterPayIsFetchSuccess);
    this.isFetchError = this.store.select(getRegisterPayIsFetchError);
    this.fetchError = this.store.select(getRegisterPayFetchError);
    this.url = this.store.select(getRegisterPayUrl);
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.store.dispatch<IAschacDispatch<IRegisterPayLink>>({
        type: RDX_REGISTER_PAY_LINK,
        payload: {
          id: res.get('id')!,
          token: res.get('token')!
        }
      });;
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
