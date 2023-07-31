import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface ILoginFetch {
  email: string;
  password: string;
}
export const RDX_LOGIN_FETCH_CAREGIVER = 'RDX_LOGIN_FETCH_CAREGIVER';
export const rdxLoginFetchCaregiver = createAction(
  RDX_LOGIN_FETCH_CAREGIVER,
  props<IAschacCreate<ILoginFetch>>()
)
export const RDX_LOGIN_FETCH_CARECONSUMER = 'RDX_LOGIN_FETCH_CARECONSUMER';
export const rdxLoginFetchCareconsumer = createAction(
  RDX_LOGIN_FETCH_CARECONSUMER,
  props<IAschacCreate<ILoginFetch>>()
)
export interface ILoginFetchSuccess {
  token: string;
  id: string;
}
export const RDX_LOGIN_FETCH_CAREGIVER_SUCCESS = 'RDX_LOGIN_FETCH_CAREGIVER_SUCCESS';
export const rdxLoginFetchCaregiverSuccess = createAction(
  RDX_LOGIN_FETCH_CAREGIVER_SUCCESS,
  props<IAschacCreate<ILoginFetchSuccess>>()
)
export const RDX_LOGIN_FETCH_CARECONSUMER_SUCCESS = 'RDX_LOGIN_FETCH_CARECONSUMER_SUCCESS';
export const rdxLoginFetchCareconsumerSuccess = createAction(
  RDX_LOGIN_FETCH_CARECONSUMER_SUCCESS,
  props<IAschacCreate<ILoginFetchSuccess>>()
)
export const RDX_LOGIN_FETCH_ERROR_400 = 'RDX_LOGIN_FETCH_ERROR_400';
export const rdxLoginFetchError400 = createAction(
  RDX_LOGIN_FETCH_ERROR_400,
  props<IAschacCreate<string>>()
)
export interface ILoginFetchError422 {
  succeeded: boolean;
  isLockedOut: boolean;
  isNotAllowed: boolean;
  requiresTwoFactor: boolean;
}
export const RDX_LOGIN_FETCH_ERROR_422 = 'RDX_LOGIN_FETCH_ERROR_422';
export const rdxLoginFetchError422 = createAction(
  RDX_LOGIN_FETCH_ERROR_422,
  props<IAschacCreate<ILoginFetchError422>>()
)
