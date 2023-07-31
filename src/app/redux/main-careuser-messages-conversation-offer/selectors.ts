import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCareuserMessagesConversationOfferReducer } from "./reducer";

const getMainCareuserMessagesConversationOfferFeatureStateSelector =
createFeatureSelector<IMainCareuserMessagesConversationOfferReducer>('mainCareuserMessagesConversationOfferReducer')

export const getMainCareuserMessagesConversationOfferIsCareRequest = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.isCareRequest
)
export const getMainCareuserMessagesConversationOfferIsCareRequestSuccess = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.isCareRequestSuccess
)

export const getMainCareuserMessagesConversationOfferCareRequest = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.careRequest
)
export const getMainCareuserMessagesConversationOfferIsHasImage = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.isHasImage
)
export const getMainCareuserMessagesConversationOfferHasImage = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.hasImage
)
export const getMainCareuserMessagesConversationOfferIsFetch = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.isFetch
)

export const getMainCareuserMessagesConversationOfferIsFetchSuccess = createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.isFetchSuccess
)
export const getMainCareuserMessagesConversationOfferFetchError400ErrorsKeys = (key: string) => createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.fetchError ? Object.keys(state.fetchError!.errors).includes(key) : false
)
export const getMainCareuserMessagesConversationOfferFetchError400ErrorsValue = (key: string) => createSelector(
  getMainCareuserMessagesConversationOfferFeatureStateSelector,
  state => state.fetchError ? state.fetchError!.errors[key] : ""
)
