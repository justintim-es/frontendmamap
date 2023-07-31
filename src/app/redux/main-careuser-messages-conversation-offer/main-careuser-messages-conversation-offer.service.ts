import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError, AxiosResponse } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
import { RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES } from '../main-careuser-messages-conversation/actions';
import { getTokenToken } from '../token/selectors';
import {
  IMainCareuserMessagesConversationOfferCareRequestSuccess, rdxMainCareuserMessagesConversationOfferCareRequest, rdxMainCareuserMessagesConversationOfferFetch, rdxMainCareuserMessagesConversationOfferFetchError, rdxMainCareuserMessagesConversationOfferHasImage, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_ERROR, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_REPEAT_FETCH_SUCCESS } from './actions';
import { IMainCareuserMessagesConversationOfferReducer } from './reducer';

@Injectable({
  providedIn: 'root'
})
export class MainCareuserMessagesConversationOfferService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  careRequest = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationOfferCareRequest),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/care-request/${ac[0].payload!.id}/${ac[0].payload?.appId}/${ac[0].payload?.to}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then((res: AxiosResponse<IMainCareuserMessagesConversationOfferCareRequestSuccess>) => {
        let aschac: IAschacDispatch<IMainCareuserMessagesConversationOfferCareRequestSuccess> = {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS,
          payload: {
            task: res.data.task,
            description: res.data.description,
            interval: res.data.interval,
            appointment: {
              date: res.data.appointment?.date ? new Date(res.data.appointment.date) : null,
              time: res.data.appointment?.time!,
              compensation: res.data.appointment?.compensation!
            }
          }
        };
        return aschac;
      }).catch(err => {
        console.log(err)
        return {
          type: RDX_GLOBAL_ERROR_TRUE,
          payload: err.response?.data
        }
      }))
    )
  })
  hasImage = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationOfferHasImage),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/profile-image/has-opponent-image/${ac[0].payload!}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })

  /// when we fetch on of the two imputs we would like to return the appointment from the controller in the backend
  /// both controllers should return the appointment
  /// actually we do want to give that payment because its te payload to the backend when we fetch the offer with values
  // but in the then/response we would like to
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationOfferFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => ac[0].payload?.repeat ? aschax.post(`/appointment/${ac[0].payload.appointmentId}/${ac[0].payload.to}`, {
        date: ac[0].payload.date,
        time: ac[0].payload.time,
        compensation: ac[0].payload.compensation
      }, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE,
          payload: err.response?.data
        }
      }) : aschax.put(`/care-request/${ac[0].payload!.requestId}/${ac[0].payload!.appointmentId}/${ac[0].payload!.to}`, {
        date: ac[0].payload?.date,
        time: ac[0].payload?.time,
        compensation: ac[0].payload?.compensation
      }, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
  // fetchDeleteAppointment = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(rdxMainCareuserMessagesConversationOfferFetchDeleteAppointment),
  //     withLatestFrom(this.store.select(getTokenToken)),
  //     switchMap(ac => aschax.delete(`/appointment/${ac[0].payload}`, {
  //       headers: {
  //         'Authorization': 'Bearer ' + ac[1]
  //       }
  //     }).then(res => {
  //       return {
  //         type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT_SUCCESS
  //       }
  //     }))
  //   )
  // })
}
