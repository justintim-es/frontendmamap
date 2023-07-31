import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { getTokenToken } from '../token/selectors';
import { IMainCareconsumerRequestFetchError, rdxMainCareconsumerRequestFetch, RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR, RDX_MAIN_CARECONSUMER_REQUEST_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainCareconsumerRequestService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerRequestFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/care-request', ac[0].payload!, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let aschac: IAschacDispatch<number> = {
          type: RDX_MAIN_CARECONSUMER_REQUEST_FETCH_SUCCESS,
          payload: res.data
        };
        return aschac;
      }).catch((err: AxiosError<IMainCareconsumerRequestFetchError>) => {
        let aschac: IAschacDispatch<IMainCareconsumerRequestFetchError> = {
          type: RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR,
          payload: err.response?.data
        };
        return aschac;
      }))
    )
  })
}
