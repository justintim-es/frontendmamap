import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareuserProfileUploadReducer } from "./reducer";

const getMainCareuserProfileUploadFeatureState = createFeatureSelector<IMainCareuserProfileUploadReducer>('mainCareuserProfileUploadReducer');

export const getMainCareuserProfileUploadIsFetch = createSelector(
  getMainCareuserProfileUploadFeatureState,
  state => state.isFetch
);
export const getMainCareuserProfileUploadIsFetchSuccess = createSelector(
  getMainCareuserProfileUploadFeatureState,
  state => state.isFetchSuccess
)
export const getMainCareuserProfileUploadIsFetchError = createSelector(
  getMainCareuserProfileUploadFeatureState,
  state => state.isFetchError
)
export const getMainCareuserProfileUploadFetchError = createSelector(
  getMainCareuserProfileUploadFeatureState,
  state => state.fetchError
)
