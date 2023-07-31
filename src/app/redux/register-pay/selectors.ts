import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRegisterPayReducer } from "./reducer";

const getRegisterPayFeatureState = createFeatureSelector<IRegisterPayReducer>('registerPayReducer');
export const getRegisterPayIsFetch = createSelector(
  getRegisterPayFeatureState,
  state => state.isFetch
)
export const getRegisterPayIsFetchSuccess = createSelector(
  getRegisterPayFeatureState,
  state => state.isFetchSuccess
)
export const getRegisterPayIsFetchError = createSelector(
  getRegisterPayFeatureState,
  state => state.isFetchError
)
export const getRegisterPayFetchError = createSelector(
  getRegisterPayFeatureState,
  state => state.fetchError
)
export const getRegisterPayUrl = createSelector(
  getRegisterPayFeatureState,
  state => state.url
)
