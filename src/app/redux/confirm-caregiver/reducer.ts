import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { IConfirmCaregiverFetchError400, rdxConfirmCaregiverFetch, rdxConfirmCaregiverFetchError400, rdxConfirmCaregiverFetchError422, rdxConfirmCaregiverFetchResend, rdxConfirmCaregiverFetchResendError, rdxConfirmCaregiverFetchResendSuccess, rdxConfirmCaregiverFetchSuccess, rdxConfirmCaregiverRouteLogin } from "./actions";

export interface IConfirmCaregiverReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError400: boolean;
    isFetchError422: boolean;
    fetchError400: IConfirmCaregiverFetchError400;
    fetchError422: any;
    isFetchResend: boolean;
    isFetchResendSuccess: boolean;
    isFetchResendError: boolean;
    fetchResendError: any;
    isRouteLogin: boolean;
}
export const confirmCaregiverInitial: IConfirmCaregiverReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError400: false,
    isFetchError422: false,
    fetchError400: {
      code: 0,
      title: '',
      subtitle: '',
      url: ''
    },
    isFetchResend: false,
    isFetchResendSuccess: false,
    isFetchResendError: false,
    fetchResendError: null,
    fetchError422: null,
    isRouteLogin: false,
}
export const confirmCaregiverReducer = createReducer(
  confirmCaregiverInitial,
  on(rdxConfirmCaregiverFetch, (state: IConfirmCaregiverReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError400: false,
      isFetchError422: false
    }
  }),
  on(rdxConfirmCaregiverFetchSuccess, (state: IConfirmCaregiverReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      onboardUrl: action.payload!
    }
  }),
  on(rdxConfirmCaregiverFetchError400, (state: IConfirmCaregiverReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError400: true,
      fetchError400: action.payload!
    }
  }),
  on(rdxConfirmCaregiverFetchError422, (state: IConfirmCaregiverReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError422: true,
      fetchError422: action.payload!
    }
  }),
  on(rdxConfirmCaregiverFetchResend, (state: IConfirmCaregiverReducer) => {
    return {
      ...state,
      isFetchResend: true,
      isFetchResendSuccess: false,
      isFetchResendError: false
    }
  }),
  on(rdxConfirmCaregiverFetchResendSuccess, (state: IConfirmCaregiverReducer) => {
    return {
      ...state,
      isFetchResend: false,
      isFetchResendSuccess: true
    }
  }),
  on(rdxConfirmCaregiverFetchResendError, (state: IConfirmCaregiverReducer, action) => {
    return {
      ...state,
      isFetchResend: false,
      isFetchResendError: true,
      fetchResendError: action.payload!
    }
  }),
  on(rdxConfirmCaregiverRouteLogin, (state: IConfirmCaregiverReducer) => {
    return {
      ...state,
      isRouteLogin: true
    }
  })
)
