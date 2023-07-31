import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { delay, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { rdxPaymentSuccessFetch, rdxPaymentSuccessFetchSuccess, RDX_PAYMENT_SUCCESS_FETCH_ERROR, RDX_PAYMENT_SUCCESS_FETCH_SUCCESS, RDX_PAYMENT_SUCCESS_IS_ROUTE_LOGIN_TRUE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentSuccessService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxPaymentSuccessFetch),
      switchMap(ac => aschax.post(`/payment-request/${ac.payload?.prid}/${ac.payload?.cmid}`).then(res => {
        return {
          type: RDX_PAYMENT_SUCCESS_FETCH_SUCCESS
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_PAYMENT_SUCCESS_FETCH_ERROR,
          paylaod: err.response?.data
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxPaymentSuccessFetchSuccess),
      delay(2000),
      map(ac => {
        return {
          type: RDX_PAYMENT_SUCCESS_IS_ROUTE_LOGIN_TRUE
        }
      })
    )
  })
}
