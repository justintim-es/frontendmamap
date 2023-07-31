import { createReducer, on } from "@ngrx/store";
import { IConfirmCareconsumerFetchError400, rdxConfirmCareconsumerFetch, rdxConfirmCareconsumerFetchError400, rdxConfirmCareconsumerFetchError422, rdxConfirmCareconsumerFetchSuccess, rdxConfirmCareconsumerIsRouteLoginTrue } from "./actions";

export interface IConfirmCareconsumerReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError400: boolean;
  isFetchError422: boolean;
  fetchError400: IConfirmCareconsumerFetchError400;
  fetchError422: any;
  isRouteLogin: boolean;
}
export const confirmCareconsumerInitial: IConfirmCareconsumerReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError400: false,
  isFetchError422: false,
  fetchError400: {
    title: '',
    subtitle: '',
    url: ''
  },
  fetchError422: null,
  isRouteLogin: false
}
export const confirmCareconsumerReducer = createReducer(
  confirmCareconsumerInitial,
  on(rdxConfirmCareconsumerFetch, (state: IConfirmCareconsumerReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError400: false,
      isFetchError422: false,
      fetchError400: {
        title: '',
        subtitle: '',
        url: ''
      },
      fetchError422: null
    }
  }),
  on(rdxConfirmCareconsumerFetchSuccess, (state: IConfirmCareconsumerReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxConfirmCareconsumerIsRouteLoginTrue, (state: IConfirmCareconsumerReducer) => {
    return {
      ...state,
      isRouteLogin: true
    }
  }),
  on(rdxConfirmCareconsumerFetchError400, (state: IConfirmCareconsumerReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError400: true,
      fetchError400: action.payload!
    }
  }),
  on(rdxConfirmCareconsumerFetchError422, (state: IConfirmCareconsumerReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError422: true,
      fetchError422: action.payload!
    }
  })
)
