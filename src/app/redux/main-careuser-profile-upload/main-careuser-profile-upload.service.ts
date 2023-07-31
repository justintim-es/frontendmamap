import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { delay, map, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { rdxMainCareuserProfileUploadFetch, rdxMainCareuserProfileUploadFetchSuccess, RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_ERROR, RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainCareuserProfileUploadService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserProfileUploadFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/profile-image', ac[0].payload!, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_ERROR
        }
      }))
    )
  })
}
