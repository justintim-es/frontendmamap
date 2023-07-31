import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAschacDispatch } from 'src/app/redux/combiner';
import { IPaymentSuccessFetch, RDX_PAYMENT_SUCCESS_FETCH } from 'src/app/redux/payment-success/actions';
import { getPaymentSuccessFetchError, getPaymentSuccessIsFetch, getPaymentSuccessIsFetchError, getPaymentSuccessIsFetchSuccess, getPaymentSuccessIsRouteLogin } from 'src/app/redux/payment-success/selectors';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  routeSub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchError: Observable<any>;
  isRouteLogin: SubscriptionLike;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.paramMap.subscribe(res => {
      this.store.dispatch<IAschacDispatch<IPaymentSuccessFetch>>({
        type: RDX_PAYMENT_SUCCESS_FETCH,
        payload: {
          prid: res.get('prid')!,
          cmid: parseInt(res.get('cmid')!)
        }
      })
    })
    this.isFetch = this.store.select(getPaymentSuccessIsFetch);
    this.isFetchSuccess = this.store.select(getPaymentSuccessIsFetchSuccess);
    this.isFetchError = this.store.select(getPaymentSuccessIsFetchError);
    this.fetchError = this.store.select(getPaymentSuccessFetchError);
    this.isRouteLogin = this.store.select(getPaymentSuccessIsRouteLogin).subscribe(res => {
      if (res) this.router.navigate(['/login']);
    });
  }
}
