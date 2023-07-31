import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { RDX_TOKEN_SET } from '../token/actions';
import { ILoginFetchSuccess, rdxLoginFetchCareconsumer, rdxLoginFetchCareconsumerSuccess, rdxLoginFetchCaregiver, rdxLoginFetchCaregiverSuccess, RDX_LOGIN_FETCH_CARECONSUMER_SUCCESS, RDX_LOGIN_FETCH_CAREGIVER_SUCCESS, RDX_LOGIN_FETCH_ERROR_400, RDX_LOGIN_FETCH_ERROR_422 } from './actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private actions: Actions
  ) { }

  fetchCaregiver = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchCaregiver),
      switchMap(ac => aschax.post('/care-giver/login', ac.payload).then(res => {
        let aschac: IAschacDispatch<ILoginFetchSuccess> = {
          type: RDX_LOGIN_FETCH_CAREGIVER_SUCCESS,
          payload: res.data,
        }
        return aschac;
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<string> = {
            type: RDX_LOGIN_FETCH_ERROR_400,
            payload: err.response.data
          };
          return aschac;
        } else {
          let aschac: IAschacDispatch<string> = {
            type: RDX_LOGIN_FETCH_ERROR_422,
            payload: err.response?.data
          };
          return aschac
        }
      }))
    )
  });
  fetchCareconsumer = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchCareconsumer),
      switchMap(ac => aschax.post('/care-consumer/login', ac.payload).then(res => {
        let aschac: IAschacDispatch<ILoginFetchSuccess> = {
          type: RDX_LOGIN_FETCH_CARECONSUMER_SUCCESS,
          payload: res.data
        };
        return aschac;
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<string> = {
            type: RDX_LOGIN_FETCH_ERROR_400,
            payload: err.response.data
          };
          return aschac;
        } else {
          let aschac: IAschacDispatch<string> = {
            type: RDX_LOGIN_FETCH_ERROR_422,
            payload: err.response?.data
          };
          return aschac
        }
      }))
    )
  })
  fetchCaregiverSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchCaregiverSuccess),
      map(ac => {
        return {
          type: RDX_TOKEN_SET,
          payload: ac.payload?.token
        }
      })
    )
  })
  fetchCareconsumerSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchCareconsumerSuccess),
      map(ac => {
        return {
          type: RDX_TOKEN_SET,
          payload: ac.payload?.token
        }
      })
    )
  })
}
