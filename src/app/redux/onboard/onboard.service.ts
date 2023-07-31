import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { rdxOnboardLink, RDX_ONBOARD_LINK_ERROR, RDX_ONBOARD_LINK_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  constructor(
    private actions: Actions
  ) { }
  link = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOnboardLink),
      switchMap(ac => aschax.get(`/care-giver/${ac.payload!.id}/${ac.payload?.token}`).then(res => {
        let aschac: IAschacDispatch<string> = {
          type: RDX_ONBOARD_LINK_SUCCESS,
          payload: res.data
        }
        return aschac;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_ONBOARD_LINK_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
}
