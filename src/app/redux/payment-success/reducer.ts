import { createReducer, on } from "@ngrx/store";
import { rdxPaymentSuccessFetch, rdxPaymentSuccessFetchError, rdxPaymentSuccessFetchSuccess, rdxPaymentSuccessIsRouteLoginTrue } from "./actions";

export interface IPaymentSuccessReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchError: any;
  isRouteLogin: boolean;
}

export const paymentSuccessInitial: IPaymentSuccessReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: null,
  isRouteLogin: false
}
export const paymentSuccessReducer = createReducer(
  paymentSuccessInitial,
  on(rdxPaymentSuccessFetch, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchError: null,
      isRouteLogin: false,
    }
  }),
  on(rdxPaymentSuccessFetchSuccess, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    }
  }),
  on(rdxPaymentSuccessFetchError, (state: IPaymentSuccessReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload
    }
  }),
  on(rdxPaymentSuccessIsRouteLoginTrue, (state: IPaymentSuccessReducer) => {
    return {
      ...state,
      isRouteLogin: true
    }
  })
)
