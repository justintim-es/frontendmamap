import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacCreate, IAschacDispatch } from '../combiner';
import { IRegisterCareconsumerFetchError400, IRegisterCareconsumerFetchError422, rdxRegisterCareconsumerFetch, RDX_REGISTER_CARECONSUMER_FETCH_ERROR_400, RDX_REGISTER_CARECONSUMER_FETCH_ERROR_422, RDX_REGISTER_CARECONSUMER_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class RegisterCareconsumerService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterCareconsumerFetch),
      switchMap(ac => aschax.post('/care-consumer', ac.payload!).then(res => {
        return {
          type: RDX_REGISTER_CARECONSUMER_FETCH_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<IRegisterCareconsumerFetchError400> = {
            type: RDX_REGISTER_CARECONSUMER_FETCH_ERROR_400,
            payload: err.response.data
          };
          return aschac;
        } else {
          let aschac: IAschacDispatch<IRegisterCareconsumerFetchError422> = {
            type: RDX_REGISTER_CARECONSUMER_FETCH_ERROR_422,
            payload: err.response?.data
          }
          return aschac;
        }
      }))
    )
  })
}
