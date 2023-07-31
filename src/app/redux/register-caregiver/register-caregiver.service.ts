import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { IRegisterCaregiverFetchError400, IRegisterCaregiverFetchError422, rdxRegisterCaregiverFetch, RDX_REGISTER_CAREGIVER_FETCH_ERROR_400, RDX_REGISTER_CAREGIVER_FETCH_ERROR_422, RDX_REGISTER_CAREGIVER_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class RegisterCaregiverService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterCaregiverFetch),
      switchMap(ac => aschax.post('/care-giver', ac.payload).then(res => {
        let aschac: IAschacDispatch<any> = {
          type: RDX_REGISTER_CAREGIVER_FETCH_SUCCESS,
        }
        return aschac;
      }).catch((err: AxiosError<any>) => {
        if (err.response?.status == 400) {
          let aschac: IAschacDispatch<IRegisterCaregiverFetchError400> = {
            type: RDX_REGISTER_CAREGIVER_FETCH_ERROR_400,
            payload: err.response?.data
          }
          return aschac;
        } else {
          let aschac: IAschacDispatch<IRegisterCaregiverFetchError422> = {
            type: RDX_REGISTER_CAREGIVER_FETCH_ERROR_422,
            payload: {
              error: err.response?.data.error
            }
          }
          return aschac;
        }

      }))
    )
  })
}
