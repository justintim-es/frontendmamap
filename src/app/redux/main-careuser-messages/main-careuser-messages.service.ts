import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { RDX_GLOBAL_ERROR_TRUE } from '../global-error/actions';
import { getTokenToken } from '../token/selectors';
import { rdxMainCareuserMessagesFetch, RDX_MAIN_CAREUSER_MESSAGES_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainCareuserMessagesService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCareuserMessagesFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/chat-message/conversations', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREUSER_MESSAGES_FETCH_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_GLOBAL_ERROR_TRUE
        }
      }))
    )
  })
}
