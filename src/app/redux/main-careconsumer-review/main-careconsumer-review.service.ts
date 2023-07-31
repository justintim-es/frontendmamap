import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
import { getTokenToken } from '../token/selectors';
import { rdxMainCareconsumerReviewFetchFname, rdxMainCareconsumerReviewFetchNew, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME_SUCCESS, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_400, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_405, RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainCareconsumerReviewService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerReviewFetchFname),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/care-giver/fname/${ac[0].payload}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE,
          payload: err.response?.data
        }
      }))
    )
  })

  fetchNew = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerReviewFetchNew),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post(`/review/${ac[0].payload?.appId}/${ac[0].payload?.cmId}`, {
        comment: ac[0].payload?.comment,
        stars: ac[0].payload?.rating
      }, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_SUCCESS,
        }
      }).catch((err: AxiosError) => {
        if (err.response?.status == 400) {
          return {
            type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_400,
            payload: err.response?.data
          }
        } else {
          return {
            type: RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_405,
            payload: err.response?.data
          }
        }


      }))
    )
  })

}
