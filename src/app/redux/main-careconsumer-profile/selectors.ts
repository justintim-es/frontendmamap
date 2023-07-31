import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareconsumerProfileReducer } from "./reducer";

const getMainCareconsumerFeatureState = createFeatureSelector<IMainCareconsumerProfileReducer>('mainCareconsumerProfileReducer');
export const getMainCareconsumerIsFetch = createSelector(
  getMainCareconsumerFeatureState,
  state => state.isFetch
)
export const getMainCareconsumerIsFetchSuccess = createSelector(
  getMainCareconsumerFeatureState,
  state => state.isFetchSuccess
)
export const getMainCareconsumerProfileImage = createSelector(
  getMainCareconsumerFeatureState,
  state => state.profileImage
)
export const getMainCareconsumerProfilePlanned = createSelector(
  getMainCareconsumerFeatureState,
  state => state.planned
)
export const getMainCareconsumerProfilePassed = createSelector(
  getMainCareconsumerFeatureState,
  state => state.passed
)
export const getMainCareconsumerProfileIsFetchPlannedRepeats = createSelector(
  getMainCareconsumerFeatureState,
  state => state.isFetchPlannedRepeats
)
export const getMainCareconsumerProfileIsFetchPassedRepeats = createSelector(
  getMainCareconsumerFeatureState,
  state => state.isFetchPassedRepeats
)
export const getMainCareconsumerProfileToRouteAppointmentId =  createSelector(
  getMainCareconsumerFeatureState,
  state => state.toRouteAppointmentId
)
export const getMainCareconsumerProfileIsRouteRepeat = createSelector(
  getMainCareconsumerFeatureState,
  state => state.isRouteRepeat
)
