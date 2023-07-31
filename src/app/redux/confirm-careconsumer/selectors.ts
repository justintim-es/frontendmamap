import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IConfirmCareconsumerReducer } from "./reducer";

const getConfirmCareconsumerFeatureState = createFeatureSelector<IConfirmCareconsumerReducer>('confirmCareconsumerReducer');
export const getConfirmCareconsumerIsFetch = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.isFetch
)
export const getConfirmCareconsumerIsFetchSuccess = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.isFetchSuccess
);
export const getConfirmCareconsumerIsFetchError400 = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.isFetchError400
)
export const getConfirmCareconsumerIsFetchError422 = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.isFetchError422
)

export const getConfirmCareconsumerFetchError400 = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.fetchError400
)
export const getConfirmCareconsumerFetchError422 = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.fetchError422
)
export const getConfirmCareconsumerIsRouteLogin  = createSelector(
  getConfirmCareconsumerFeatureState,
  state => state.isRouteLogin
)
