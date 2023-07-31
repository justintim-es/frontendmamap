import { NgSwitchCase } from '@angular/common';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { IConfirmCaregiverFetchError400, rdxConfirmCaregiverFetch, rdxConfirmCaregiverFetchResend, rdxConfirmCaregiverFetchSuccess, RDX_CONFIRM_CAREGIVER_FETCH_ERROR_400, RDX_CONFIRM_CAREGIVER_FETCH_ERROR_422, RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR, RDX_CONFIRM_CAREGIVER_FETCH_RESEND_SUCCESS, RDX_CONFIRM_CAREGIVER_FETCH_SUCCESS, RDX_CONFIRM_CAREGIVER_ROUTE_LOGIN } from './actions';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCaregiverService {

  constructor(
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmCaregiverFetch),
      switchMap(ac => aschax.post(`/care-giver/${ac.payload!.id}/${ac.payload!.token}`).then(res => {
        return {
          type: RDX_CONFIRM_CAREGIVER_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<IConfirmCaregiverFetchError400> = {
            type: RDX_CONFIRM_CAREGIVER_FETCH_ERROR_400,
            payload: err.response.data
          }
          return aschac;
        } else {
          let aschac: IAschacDispatch<any> = {
            type: RDX_CONFIRM_CAREGIVER_FETCH_ERROR_422,
            payload: err.response?.data
          };
          return aschac;
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmCaregiverFetchSuccess),
      delay(2000),
      map(ac => {
        return {
          type: RDX_CONFIRM_CAREGIVER_ROUTE_LOGIN
        }
      })
    )
  })
  resendFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmCaregiverFetchResend),
      switchMap(ac => aschax.post(`/care-giver/resend/${ac.payload}`).then(res => {
        return {
          type: RDX_CONFIRM_CAREGIVER_FETCH_RESEND_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
}
