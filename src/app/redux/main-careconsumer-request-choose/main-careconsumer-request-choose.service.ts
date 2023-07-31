import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { response } from 'express';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
import { getTokenToken } from '../token/selectors';
import { IMainCareconsumerRequestChooseCaregiversSuccess, rdxMainCareconsumerRequestChooseCaregivers, rdxMainCareconsumerRequestChooseInviteFetch, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS_SUCCESS, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH, RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH_SUCCESS } from './actions';
import { getMaincareconsumerRequestChooseInvited } from './selectors';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class MainCareconsumerRequestChooseService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  careGivers = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerRequestChooseCaregivers),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
          aschax.get('/care-giver/choose-degree/true', {
            headers: {
              'Authorization': 'Bearer ' + ac[1]
            }
          }),
          aschax.get('/care-giver/choose-degree/false', {
            headers: {
              'Authorization': 'Bearer ' + ac[1]
            }
          })
      ]).then(res => {
        let aschac: IAschacDispatch<IMainCareconsumerRequestChooseCaregiversSuccess> = {
          type: RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS_SUCCESS,
          payload: {
            city: res[0].data.city,
            degreedCareGivers: res[0].data.careGivers,
            undegreedCareGivers: res[1].data.careGivers
          }
        };
        return aschac;
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
  inviteFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareconsumerRequestChooseInviteFetch),
      withLatestFrom(this.store.select(getMaincareconsumerRequestChooseInvited), this.store.select(getTokenToken)),
      switchMap(ac => aschax.post(`/care-request/${ac[0].payload!}`, ac[1], {
        headers: {
          'Authorization': 'Bearer ' + ac[2]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE,
          payload: err.response?.data
        }
      }))
    )
  })
}
