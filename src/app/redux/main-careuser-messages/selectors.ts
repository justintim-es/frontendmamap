import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareuserMessagesReducer } from "./reducer";

const getMainCareuserMessagesFeatureState = createFeatureSelector<IMainCareuserMessagesReducer>('mainCareuserMessagesReducer');

export const getMainCareuserMessagesIsFetch = createSelector(
  getMainCareuserMessagesFeatureState,
  state => state.isFetch
)
export const getMainCareuserMessagesIsFetchSuccess = createSelector(
  getMainCareuserMessagesFeatureState,
  state => state.isFetchSuccess
)
export const getMainCareuserMessagesConversations = createSelector(
  getMainCareuserMessagesFeatureState,
  state => state.conversations
)
export const getMainCareuserMessagesUnread = (index: number) => createSelector(
  getMainCareuserMessagesFeatureState,
  state => state.conversations[index]?.filter(x => !x.amISender && !x.seen).length
)
