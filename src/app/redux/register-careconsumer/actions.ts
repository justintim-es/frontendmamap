import { createAction, createSelector, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IRegisterCareconsumerFetch {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  addressOne: string;
  addressTwo: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
}
export const RDX_REGISTER_CARECONSUMER_FETCH = 'RDX_REGISTER_CARECONSUMER_FETCH';
export const rdxRegisterCareconsumerFetch = createAction(
  RDX_REGISTER_CARECONSUMER_FETCH,
  props<IAschacCreate<IRegisterCareconsumerFetch>>()
)
export const RDX_REGISTER_CARECONSUMER_FETCH_SUCCESS = 'RDX_REGISTER_CARECONSUMER_FETCH_SUCCESS';
export const rdxRegisterCareconsumerFetchSuccess = createAction(
  RDX_REGISTER_CARECONSUMER_FETCH_SUCCESS,
)
export interface IRegisterCareconsumerFetchError400 {
  title: string;
  status: number;
  traceId: string;
  errors: IRegisterCarconsumerFetchErrorErrors;
}
export interface IRegisterCarconsumerFetchErrorErrors {
  [key: string] : []
}
export const RDX_REGISTER_CARECONSUMER_FETCH_ERROR_400 = 'RDX_REGISTER_CARECONSUMER_FETCH_ERROR_400';
export const rdxRegisterCareconsumerFetchError400 =  createAction(
  RDX_REGISTER_CARECONSUMER_FETCH_ERROR_400,
  props<IAschacCreate<IRegisterCareconsumerFetchError400>>()
)
export interface IRegisterCareconsumerFetchError422 {
  error: string;
}
export const RDX_REGISTER_CARECONSUMER_FETCH_ERROR_422 =  'RDX_REGISTER_CARECONSUMER_FETCH_ERROR_422';
export const rdxRegisterCareconsumerFetchError422 = createAction(
  RDX_REGISTER_CARECONSUMER_FETCH_ERROR_422,
  props<IAschacCreate<IRegisterCareconsumerFetchError422>>()
)

