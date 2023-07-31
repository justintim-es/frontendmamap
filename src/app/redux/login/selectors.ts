import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginFetch } from "./actions";
import { ILoginReducer } from "./reducer";

const getLoginFeatureState = createFeatureSelector<ILoginReducer>('loginReducer');

export const getLoginIsFetch = createSelector(
  getLoginFeatureState,
  state => state.isFetch
);
export const getLoginIsFetchCaregiverSuccess = createSelector(
  getLoginFeatureState,
  state => state.isFetchCaregiverSuccess
);
export const getLoginIsFetchCareconsumerSuccess = createSelector(
  getLoginFeatureState,
  state => state.isFetchCareconsumerSuccess
);
export const getLoginIsFetchError400 = createSelector(
  getLoginFeatureState,
  state => state.isFetchError400
)
export const getLoginFetchError = createSelector(
  getLoginFeatureState,
  state => state.fetchError
);
export const getLoginIsFetchErrorLockedOut = createSelector(
  getLoginFeatureState,
  state => state.isFetchErrorLockedOut
)
export const getLoginIsFetchErrorNotAllowed = createSelector(
  getLoginFeatureState,
  state => state.isFetchErrorNotAllowed
)
export const getLoginId = createSelector(
  getLoginFeatureState,
  state => state.id
)
