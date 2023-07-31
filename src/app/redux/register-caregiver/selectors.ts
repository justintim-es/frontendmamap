import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRegisterCaregiverReducer } from "./reducer";

const getRegisterCareGiverFeatureState = createFeatureSelector<IRegisterCaregiverReducer>('registerCareGiverReducer');
export const getRegisterCareGiverIsFetch = createSelector(
  getRegisterCareGiverFeatureState,
  state => state.isFetch
)
export const getRegisterCareGiverIsFetchSuccess = createSelector(
  getRegisterCareGiverFeatureState,
  state => state.isFetchSuccess
)
export const getRegisterCareGiverIsFetchError422 = createSelector(
  getRegisterCareGiverFeatureState,
  state => state.isFetchError422
)
export const getRegisterCareGiverFetchError400ErrorsKeys = (key: string) => createSelector(
  getRegisterCareGiverFeatureState,
  state => state.fetchError400 ? Object.keys(state.fetchError400!.errors).includes(key) : false
)
export const getRegisterCareGiverFetchError400ErrorsValue = (key: string) => createSelector(
  getRegisterCareGiverFeatureState,
  state => state.fetchError400 ? state.fetchError400!.errors[key] : ""
)
export const getRegisterCaregiverFetchError422 = createSelector(
  getRegisterCareGiverFeatureState,
  state => state.fetchError422
)
