import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { getTokenToken } from '../token/selectors';
import { IMainCareconsumerProfileFetchRepeatAppointment, IMaincareconsumerProfileFetchRepeatAppointmentSuccess, IMainCareconsumerProfileFetchSuccess, IMainCareconsumerProfileHasOpponentImage, rdxMainCareconsumerProfileFetch, rdxMainCareconsumerProfileFetchRepeatAppointmentPassed, rdxMainCareconsumerProfileFetchRepeatAppointmentPlanned, rdxMainCareconsumerProfileFetchSuccess, rdxMainCareconsumerProfileHasOpponentImagePassed, rdxMainCareconsumerProfileHasOpponentImagePlanned, RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED_SUCCESS, RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED_SUCCESS, RDX_MAIN_CARECONSUMER_PROFILE_FETCH_SUCCESS, RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED, RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED_SUCCESS, RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED, RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED_SUCCESS } from './actions';
import axios, { AxiosError } from 'axios';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
@Injectable({
  providedIn: 'root'
})
export class MainCareconsumerProfileService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get('/profile-image', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        }),
        aschax.get('/appointment/planned', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        }),
        aschax.get('/appointment/passed', {
          headers: {
            'Authorization': 'Bearer ' + ac[1]
          }
        })
      ]).then(res => {
        let aschac: IAschacDispatch<IMainCareconsumerProfileFetchSuccess> = {
          type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH_SUCCESS,
          payload: {
            profileImage: res[0].data,
            planned: res[1].data,
            passed: res[2].data
          }
        }
        return aschac;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileFetchSuccess),
      mergeMap(ac => {
        let aschacs: IAschacDispatch<IMainCareconsumerProfileHasOpponentImage>[] = [];
        for (let i = 0; i < ac.payload?.planned!.length!; i++) {
          aschacs.push({
            type: RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED,
            payload: {
              index: i,
              id: ac.payload?.planned[i]!.careGiverId!
            }
          });
        }
        for (let i = 0; i < ac.payload?.passed.length!; i++) {
          aschacs.push({
            type: RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED,
            payload: {
              index: i,
              id: ac.payload?.passed[i]!.careGiverId!
            }
          })
        }
        return aschacs;
      })
    )
  })
  hasOpponentImagePlanned = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileHasOpponentImagePlanned),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get(`/profile-image/has-opponent-image/${ac[0].payload?.id}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED_SUCCESS,
          payload: {
            index: ac[0].payload?.index,
            has: res.data
          }
        }
      }))
    )
  })
  hasOpponentImagePassed = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileHasOpponentImagePassed),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get(`/profile-image/has-opponent-image/${ac[0].payload?.id}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED_SUCCESS,
          payload: {
            index: ac[0].payload?.index,
            has: res.data
          }
        }
      }))
    )
  })

  fetchRepeatAppointmentPlanned = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileFetchRepeatAppointmentPlanned),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post(`/appointment/prepare/${ac[0].payload?.careRequestId}/${ac[0].payload?.careGiverId}`, null, {
        headers: {
          'Authorization': 'Bearer ' +  ac[1]
        }
      }).then(res => {
        let aschac: IAschacDispatch<IMaincareconsumerProfileFetchRepeatAppointmentSuccess> = {
          type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            appId: res.data
          }
        }
        return aschac;
      }))
    )
  })
  fetchRepeatAppointmentPassed = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerProfileFetchRepeatAppointmentPassed),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post(`/appointment/prepare/${ac[0].payload?.careRequestId}/${ac[0].payload?.careGiverId}`, null, {
        headers: {
          'Authorization': 'Bearer ' +  ac[1]
        }
      }).then(res => {
        let aschac: IAschacDispatch<IMaincareconsumerProfileFetchRepeatAppointmentSuccess> = {
          type: RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED_SUCCESS,
          payload: {
            index: ac[0].payload!.index,
            appId: res.data
          }
        }
        return aschac;
      }))
    )
  })
}
