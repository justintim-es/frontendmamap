import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCaregiverProfileReducer } from "./reducer";

const getMainCaregiverProfileFeatureState = createFeatureSelector<IMainCaregiverProfileReducer>('mainCaregiverProfileReducer');
export const getMainCaregiverProfileIsFetch = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.isFetch
)
export const getMainCaregiverProfileIsFetchSuccess = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.isFetchSuccess
)
export const getMainCaregiverProfileProfileImage = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.profileImage
)
export const getMainCaregiverProfileFirstName = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.firstName
)
export const getMainCaregiverProfileBiography = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.biography
)
export const getMainCaregiverProfileIsBiographyFetch = createSelector(
  getMainCaregiverProfileFeatureState,
  state => state.isBiographyFetch
)
