import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPaymentSuccessReducer } from "./reducer";

const getPaymentSuccessFeatureState = createFeatureSelector<IPaymentSuccessReducer>('paymentSuccessReducer')

export const getPaymentSuccessIsFetch = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isFetch
)
export const getPaymentSuccessIsFetchSuccess = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isFetchSuccess
)
export const getPaymentSuccessIsFetchError = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isFetchError
)
export const getPaymentSuccessFetchError = createSelector(
  getPaymentSuccessFeatureState,
  state => state.fetchError
)
export const getPaymentSuccessIsRouteLogin = createSelector(
  getPaymentSuccessFeatureState,
  state => state.isRouteLogin
)
