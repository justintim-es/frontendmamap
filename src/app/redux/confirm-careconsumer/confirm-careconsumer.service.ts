import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { IConfirmCareconsumerFetch, IConfirmCareconsumerFetchError400, rdxConfirmCareconsumerFetch, rdxConfirmCareconsumerFetchSuccess, RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_400, RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_422, RDX_CONFIRM_CARECONSUMER_FETCH_SUCCESS, RDX_CONFIRM_CARECONSUMER_IS_ROUTE_LOGIN_TRUE } from './actions';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCareconsumerService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmCareconsumerFetch),
      switchMap(ac => aschax.post(`/care-consumer/${ac.payload?.id}/${ac.payload?.token}`).then(res => {
        return {
          type: RDX_CONFIRM_CARECONSUMER_FETCH_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<IConfirmCareconsumerFetchError400> = {
            type: RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_400,
            payload: err.response.data
          }
          return aschac;
        } else {
          let aschac: IAschacDispatch<any> = {
            type: RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_422,
            payload: err.response?.data
          };
          return aschac;
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmCareconsumerFetchSuccess),
      delay(2000),
      map(ac => {
        return {
          type: RDX_CONFIRM_CARECONSUMER_IS_ROUTE_LOGIN_TRUE
        }
      })
    )
  })
}
