import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IConfirmCaregiverFetch {
  id: string;
  token: string;
}
export const RDX_CONFIRM_CAREGIVER_FETCH  = 'RDX_CONFIRM_CAREGIVER_FETCH';
export const rdxConfirmCaregiverFetch = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH,
  props<IAschacCreate<IConfirmCaregiverFetch>>()
)
export const RDX_CONFIRM_CAREGIVER_FETCH_SUCCESS  = 'RDX_CONFIRM_CAREGIVER_FETCH_SUCCESS';
export const rdxConfirmCaregiverFetchSuccess = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_SUCCESS,
  props<IAschacCreate<string>>()
)
export interface IConfirmCaregiverFetchError400 {
  code: number;
  title: string;
  subtitle: string;
  url: string;
}
export const RDX_CONFIRM_CAREGIVER_FETCH_ERROR_400 = 'RDX_CONFIRM_CAREGIVER_FETCH_ERROR_400';
export const rdxConfirmCaregiverFetchError400 = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_ERROR_400,
  props<IAschacCreate<IConfirmCaregiverFetchError400>>()
)
export const RDX_CONFIRM_CAREGIVER_FETCH_ERROR_422 = 'RDX_CONFIRM_CAREGIVER_FETCH_ERROR_422';
export const rdxConfirmCaregiverFetchError422 = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_ERROR_422,
  props<IAschacCreate<any>>()
)
export const RDX_CONFIRM_CAREGIVER_FETCH_RESEND = 'RDX_CONFIRM_CAREGIVER_FETCH_RESEND';
export const rdxConfirmCaregiverFetchResend = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_RESEND,
  props<IAschacCreate<string>>()
)
export const RDX_CONFIRM_CAREGIVER_FETCH_RESEND_SUCCESS = 'CREATE_CONFIRM_CAREGIVER_FETCH_RESEND_SUCCESS';
export const rdxConfirmCaregiverFetchResendSuccess = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_RESEND_SUCCESS
)
export const RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR = 'RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR';
export const rdxConfirmCaregiverFetchResendError = createAction(
  RDX_CONFIRM_CAREGIVER_FETCH_RESEND_ERROR,
  props<IAschacCreate<any>>()
)

export const RDX_CONFIRM_CAREGIVER_ROUTE_LOGIN = 'RDX_CONFIRM_CAREGIVER_ROUTE_LOGIN';
export const rdxConfirmCaregiverRouteLogin = createAction(
  RDX_CONFIRM_CAREGIVER_ROUTE_LOGIN
)
