import { createReducer, on } from "@ngrx/store";
import { IMainCareuserMessagesConversationOfferCareRequestSuccess, IMainCareuserMessagesConversationOfferFetchError400, rdxMainCareuserMessagesConversationOfferCareRequest, rdxMainCareuserMessagesConversationOfferCareRequestSuccess, rdxMainCareuserMessagesConversationOfferFetch, rdxMainCareuserMessagesConversationOfferFetchError, rdxMainCareuserMessagesConversationOfferFetchSuccess, rdxMainCareuserMessagesConversationOfferHasImage, rdxMainCareuserMessagesConversationOfferHasImageSuccess, rdxMainCareuserMessagesConversationOfferRepeatFetchSuccess, rdxMainCareuserMessagesConversationOfferReset } from "./actions";

export interface IMainCareuserMessagesConversationOfferReducer {
  isCareRequest: boolean;
  isCareRequestSuccess: boolean;
  careRequest: IMainCareuserMessagesConversationOfferCareRequestSuccess;
  isHasImage: boolean;
  hasImage: boolean;
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchError: IMainCareuserMessagesConversationOfferFetchError400 | null;
  isRepeatFetchSuccess: boolean;
}

const mainCareuserMessagesConversationOfferInitial: IMainCareuserMessagesConversationOfferReducer = {
  isCareRequest: false,
  isCareRequestSuccess: false,
  careRequest: {
    task: '',
    description: '',
    interval: '',
    appointment: {
      date: new Date(),
      time: '',
      compensation: 0
    }
  },
  isHasImage: false,
  hasImage: false,
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: null,
  isRepeatFetchSuccess: false,
}
export const mainCareuserMessagesConversationOfferReducer = createReducer(
  mainCareuserMessagesConversationOfferInitial,
  on(rdxMainCareuserMessagesConversationOfferCareRequest, (state: IMainCareuserMessagesConversationOfferReducer) => {
    return {
      ...state,
      isCareRequest: true,
      isCareRequestSuccess: false
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferCareRequestSuccess, (state: IMainCareuserMessagesConversationOfferReducer, action) => {
    return {
      ...state,
      isCareRequest: false,
      isCareRequestSuccess: true,
      careRequest: action.payload!
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferHasImage, (state: IMainCareuserMessagesConversationOfferReducer) => {
    return {
      ...state,
      isHasImage: true,
      hasImage: false
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferHasImageSuccess, (state: IMainCareuserMessagesConversationOfferReducer, action) => {
    return {
      ...state,
      isHasImage: false,
      hasImage: action.payload!
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferFetch, (state: IMainCareuserMessagesConversationOfferReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isRepeatFetchSuccess: false,
      isFetchError: false,
      fetchError: null
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferFetchSuccess, (state: IMainCareuserMessagesConversationOfferReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  // on(rdxMainCareuserMessagesConversationOfferRepeatFetchSuccess, (state: IMainCareuserMessagesConversationOfferReducer) => {
  //   return {
  //     ...state,
  //     isRepeatFetchSuccess: true
  //   }
  // }),
  on(rdxMainCareuserMessagesConversationOfferFetchError, (state: IMainCareuserMessagesConversationOfferReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  }),
  on(rdxMainCareuserMessagesConversationOfferReset, (state: IMainCareuserMessagesConversationOfferReducer) => {
    return mainCareuserMessagesConversationOfferInitial;
  })
)
