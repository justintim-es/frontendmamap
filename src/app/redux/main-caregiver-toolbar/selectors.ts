import { TaggedTemplateExpr } from "@angular/compiler";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCaregiverToolbarReducer } from "./reducer";

const getMainCaregiverToolbarFeatureState = createFeatureSelector<IMainCaregiverToolbarReducer>('mainCaregiverToolbarReducer');

export const getMainCaregiverToolbarCurrent = createSelector(
  getMainCaregiverToolbarFeatureState,
  state => state.current
)
export const getMainCaregiverToolbarIsOpen = createSelector(
  getMainCaregiverToolbarFeatureState,
  state => state.isOpen
)
export const getMainCaregiverToolbarIsUnreadMessagesFetch = createSelector(
  getMainCaregiverToolbarFeatureState,
  state => state.isUnreadMessagesFetch
)
export const getMainCaregiverToolbarIsUnreadMessagesFetchSuccess = createSelector(
  getMainCaregiverToolbarFeatureState,
  state => state.isUnreadMessagesFetchSuccess
)
export const getMainCaregiverToolbarUnreadMessages = createSelector(
  getMainCaregiverToolbarFeatureState,
  state => state.unreadMessages
)
