import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";
export interface IPaymentSuccessFetch {
  prid: string;
  cmid: number;
}
export const RDX_PAYMENT_SUCCESS_FETCH = 'RDX_PAYMENT_SUCCESS_FETCH';
export const rdxPaymentSuccessFetch = createAction(
  RDX_PAYMENT_SUCCESS_FETCH,
  props<IAschacCreate<IPaymentSuccessFetch>>()
)
export const RDX_PAYMENT_SUCCESS_FETCH_SUCCESS = 'RDX_PAYMENT_SUCCESS_FETCH_SUCCESS';
export const rdxPaymentSuccessFetchSuccess = createAction(
  RDX_PAYMENT_SUCCESS_FETCH_SUCCESS
)
export const RDX_PAYMENT_SUCCESS_FETCH_ERROR = 'RDX_PAYMENT_SUCCESS_FETCH_ERROR';
export const rdxPaymentSuccessFetchError = createAction(
  RDX_PAYMENT_SUCCESS_FETCH_ERROR,
  props<IAschacCreate<any>>()
)
export const RDX_PAYMENT_SUCCESS_IS_ROUTE_LOGIN_TRUE = 'RDX_PAYMENT_SUCCESS_IS_ROUTE_LOGIN';
export const rdxPaymentSuccessIsRouteLoginTrue = createAction(
  RDX_PAYMENT_SUCCESS_IS_ROUTE_LOGIN_TRUE
)
