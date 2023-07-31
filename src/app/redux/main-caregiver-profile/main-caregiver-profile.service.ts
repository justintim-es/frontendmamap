import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { IMainCaregiverProfileFetchSuccess, rdxMainCaregiverProfileBiographyFetch, rdxMainCaregiverProfileFetch, RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH, RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH_SUCCESS, RDX_MAIN_CAREGIVER_PROFILE_FETCH, RDX_MAIN_CAREGIVER_PROFILE_FETCH_SUCCESS } from './actions';
import axios, { Axios, AxiosError } from 'axios';
import { IAschacDispatch } from '../combiner';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
@Injectable({
  providedIn: 'root'
})
export class MainCaregiverProfileService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCaregiverProfileFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get('/profile-image', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        }),
        aschax.get('/care-giver/profile', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        })
      ]).then(res => {
        let aschac: IAschacDispatch<IMainCaregiverProfileFetchSuccess> = {
          type: RDX_MAIN_CAREGIVER_PROFILE_FETCH_SUCCESS,
          payload: {
            profileImage: res[0].data,
            firstName: res[1].data.firstName,
            biography: res[1].data.biography
          }
        };
        return aschac;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
  biographyFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCaregiverProfileBiographyFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.put('/care-giver', ac[0].payload!, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH_SUCCESS
        }
      }))
    )
  })
}
