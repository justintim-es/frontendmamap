import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAschacDispatch } from '../combiner';
import { rdxRegisterPayLink, RDX_REGISTER_PAY_LINK_ERROR, RDX_REGISTER_PAY_LINK_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class RegisterPayService {

  constructor(
    private actions: Actions
  ) { }

  link = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterPayLink),
      switchMap(ac => aschax.get(`/care-consumer/${ac.payload?.id}/${ac.payload?.token}`).then(res => {
        let aschac: IAschacDispatch<string> = {
          type: RDX_REGISTER_PAY_LINK_SUCCESS,
          payload: res.data
        };
        return aschac;
      }).catch((err: AxiosError<any>) => {
        let aschac: IAschacDispatch<any> = {
          type: RDX_REGISTER_PAY_LINK_ERROR,
          payload: err.response?.data
        };
        return aschac;
      }))
    )
  })
}
