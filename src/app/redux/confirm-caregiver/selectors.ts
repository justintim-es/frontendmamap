import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IConfirmCaregiverReducer } from "./reducer";

const getConfirmFeatureState = createFeatureSelector<IConfirmCaregiverReducer>('confirmCaregiverReducer');
export const getConfirmCaregiverIsFetch = createSelector(
  getConfirmFeatureState,
  state => state.isFetch
)
export const getConfirmCaregiverIsFetchSuccess = createSelector(
  getConfirmFeatureState,
  state => state.isFetchSuccess
)
export const getConfirmCaregiverIsFetchError400 = createSelector(
  getConfirmFeatureState,
  state => state.isFetchError400
)
export const getConfirmCaregiverIsFetchError422 = createSelector(
  getConfirmFeatureState,
  state => state.isFetchError422
)
export const getConfirmCaregiverFetchError400 = createSelector(
  getConfirmFeatureState,
  state => state.fetchError400
)
export const getConfirmCaregiverFetchError422 = createSelector(
  getConfirmFeatureState,
  state => state.fetchError422
)
export const getConfirmCaregiverIsFetchResend = createSelector(
  getConfirmFeatureState,
  state => state.isFetchResend
)
export const getConfirmCaregiverIsFetchResendSuccess = createSelector(
  getConfirmFeatureState,
  state => state.isFetchResendSuccess
)
export const getConfirmCaregiverIsFetchResendError = createSelector(
  getConfirmFeatureState,
  state => state.isFetchResendError
)
export const getConfirmCaregiverFetchResendError = createSelector(
  getConfirmFeatureState,
  state => state.fetchResendError
)

export const getConfirmCaregiverIsRouteLogin = createSelector(
  getConfirmFeatureState,
  state => state.isRouteLogin
)
