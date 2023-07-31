import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { rdxMainCaregiverToolbarUnreadMessages, RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainCaregiverToolbarService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  unreadMessages = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCaregiverToolbarUnreadMessages),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/chat-message/unseen', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES_SUCCESS,
          payload: res.data
        }
      }))
    )
  })
}
