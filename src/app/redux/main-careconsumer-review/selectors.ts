import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IMainCareconsumerReviewReducer } from "./reducer"

const getMainCareconsumerReviewFeatureState = createFeatureSelector<IMainCareconsumerReviewReducer>('mainCareconsumerReviewReducer');

export const getMainCareconsumerReviewIsFetchFname = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchFname
)
export const getMainCareconsumerReviewIsFetchFnameSuccess = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchFnameSuccess
)
export const getMainCareconsumerReviewFname = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.fName
)
export const getMainCareconsumerReviewIsFetchNew = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchNew
)
export const getMainCareconsumerReviewIsFetchNewSuccess = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchNewSuccess
)
export const getMainCareconsumerReviewIsFetchNewError400 = (key: string) => createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchNewError400 ? Object.keys(state.fetchNewError400?.errors!).includes(key) :  false,
)
export const getMainCareconsumerReviewFetchNewError400 = (key: string) => createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.fetchNewError400 ? state.fetchNewError400!.errors[key] : ""
)
export const getMainCareconsumerReviewIsFetchNewError405 = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.isFetchNewError405
)
export const getMainCareconsumerReviewFetchNewError405 = createSelector(
  getMainCareconsumerReviewFeatureState,
  state => state.fetchNewError405
)
