import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { IMainCareuserMessagesConversationCaregiverAcceptFetch, IMainCareuserMessagesConversationCaregiverAcceptFetchError, IMainCareuserMessagesConversationCaregiverAcceptFetchSuccess, IMainCareuserMessagesConversationFetchSuccess, IMainCareuserMessagesConversationFetchSuccessCareUser, rdxMainCareuserMessagesConversationCaregiverAcceptFetch, rdxMainCareuserMessagesConversationCaregiverAcceptFetchSuccess, rdxMainCareuserMessagesConversationMessages, rdxMainCareuserMessagesConversationReadFetch, rdxMainCareuserMessagesConversationWriteFetch, rdxMainCareuserMessagesConversationWriteFetchError, rdxMainCareuserMessagesConversationWriteFetchSuccess, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_ERROR, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH_SUCCESS, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR, RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_SUCCESS } from './actions';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IAschacCreate, IAschacDispatch } from '../combiner';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
import { RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED } from '../main-careconsumer-request-choose/actions';
@Injectable({
  providedIn: 'root'
})
export class MainCareuserMessagesConversationService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  readFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationReadFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.put(`/chat-message/read-conversation/${ac[0].payload}`, null, {
        headers: {
           'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH_SUCCESS
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
  messages = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationMessages),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/chat-message/conversation/${ac[0].payload}`, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then((res: AxiosResponse<IMainCareuserMessagesConversationFetchSuccess[]>) => {
        let aschac: IAschacDispatch<IMainCareuserMessagesConversationFetchSuccess[]> = {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES_SUCCESS,
          payload: res.data
        }
        return aschac;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
  writeFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationWriteFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/chat-message', ac[0].payload!, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_SUCCESS,
          payload: ac[0].payload?.recieverId
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
  writeFetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationWriteFetchSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES,
          payload: ac.payload
        }
      })
    )
  })
  // fetch = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(rdxMainCareuserMessagesConversationFetch),
  //     withLatestFrom(this.store.select(getTokenToken)),
  //     switchMap(ac => axios.all([
  //       aschax.get(`/chat-message/conversation/${ac[0].payload}`),
  //       aschax.put(`/chat-message/read-conversation/${ac[0].payload}`)
  //     ]).then(res => {
  //       let aschac: IAschacDispatch<IMainCareuserMessagesConversationFetchSuccess> = {
  //         type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_FETCH_SUCCESS,
  //         payload: res[0].data
  //       };
  //       return aschac;
  //     }).catch((err: AxiosError) => {
  //       return {
  //         type: RDX_GLOBAL_ERROR_TRUE
  //       }
  //     }))
  //   )
  // })
  // carerequestid moet hier heten txtid en in de backend
  caregiverAcceptFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationCaregiverAcceptFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post(`/payment-request/${ac[0].payload?.to}/${ac[0].payload!.appId}/${ac[0].payload?.cmId}`, null, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let aschac: IAschacDispatch<IMainCareuserMessagesConversationCaregiverAcceptFetchSuccess> = {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_SUCCESS,
          payload: {
            index: ac[0].payload?.index!,
            appid: ac[0].payload?.appId!,
            to: ac[0].payload?.to!,
            appIndex: ac[0].payload?.appIndex!
          }
        };
        return aschac;
      }).catch((err: AxiosError) => {
        let aschac: IAschacDispatch<IMainCareuserMessagesConversationCaregiverAcceptFetchError> = {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_ERROR,
          payload: {
            // error: err.response?.data,
            index: ac[0].payload?.index,
            appid: ac[0].payload?.appId!,
            appIndex: ac[0].payload?.appIndex!
          }
        }
        return aschac;
      }))
    );
  })
  caregiverAcceptFetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesConversationCaregiverAcceptFetchSuccess),
      map(ac => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES,
          payload: ac.payload?.to
        }
      })
    )
  })
}

