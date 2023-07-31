import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRegisterCareConsumerReducer } from "./reducer";

const getRegisterCareConsumerFeatureState = createFeatureSelector<IRegisterCareConsumerReducer>('registerCareConsumerReducer');
export const getRegisterCareConsumerIsFetch = createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.isFetch
)
export const getRegisterCareConsumerIsFetchSuccess = createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.isFetchSuccess
)
export const getRegisterCareConsumerIsFetchError422 = createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.isFetchError422
)
export const getRegisterCareConsumerFetchError400ErrorsKeys = (key: string) => createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.fetchError400 ? Object.keys(state.fetchError400!.errors).includes(key) : false
)
export const getRegisterCareConsumerFetchError400ErrorsValue = (key: string) => createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.fetchError400 ? state.fetchError400!.errors[key] : ""
)
export const getRegisterCareConsumerFetchError422 = createSelector(
  getRegisterCareConsumerFeatureState,
  state => state.fetchError422
)
