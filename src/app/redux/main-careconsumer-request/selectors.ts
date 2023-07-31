import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareconsumerRequestReducer } from "./reducer";

const getMainCareconsumerRequestFeatureState = createFeatureSelector<IMainCareconsumerRequestReducer>('mainCareconsumerRequestReducer');
export const getMainCareconsumerRequestIsFetch = createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.isFetch
)
export const getMainCareconsumerRequestIsFetchSuccess = createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.isFetchSuccess
)
export const getMainCareconsumerRequestRequestId = createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.requestId
)
export const getMainCareconsumerRequestIsFetchError = createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.isFetchError
)
export const getMainCareconsumerRequestFetchErrorErrorsKeys = (key: string) => createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.fetchError ? Object.keys(state.fetchError!.errors).includes(key) : false
)
export const getMainCareconsumerRequestFetchErrorErrorsValue = (key: string) => createSelector(
  getMainCareconsumerRequestFeatureState,
  state => state.fetchError ? state.fetchError!.errors[key] : ""
)

