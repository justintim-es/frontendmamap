import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareconsumerRequestChooseReducer } from "./reducer";

const getMainCareconsumerRequestChooseFeatureSelector = createFeatureSelector<IMainCareconsumerRequestChooseReducer>('mainCareconsumerRequestChooseReducer');
export const getMainCareconsumerRequestChooseIsCaregivers = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.isCaregivers
)
export const getMainCareconsumerRequestChooseIsCaregiversSuccess = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.isCaregiversSuccess
)
export const getMainCareconsumerRequestChooseDegreedCareGivers = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.degreedCareGivers
)
export const getMainCareconsumerRequestChooseUndegreedCareGivers = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.undegreedCareGivers
)
export const getMainCareconsumerRequestChooseCity = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.city
)
export const getMaincareconsumerRequestChooseInvited = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.invited
)
export const getMainCareconsumerRequestChooseIsInviteFetch = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.isInviteFetch
)
export const getMainCareconsumerRequestChooseIsInviteFetchSuccess = createSelector(
  getMainCareconsumerRequestChooseFeatureSelector,
  state => state.isInviteFetchSuccess
)
