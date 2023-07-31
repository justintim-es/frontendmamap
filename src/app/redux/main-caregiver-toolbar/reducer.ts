import { createReducer, on } from "@ngrx/store";
import { rdxMainCaregiverToolbarClose, rdxMainCaregiverToolbarOpen, rdxMainCaregiverToolbarUnreadMessages, rdxMainCaregiverToolbarUnreadMessagesSuccess } from "./actions";

export interface IMainCaregiverToolbarReducer {
  current: string;
  isOpen: boolean;
  isUnreadMessagesFetch: boolean;
  isUnreadMessagesFetchSuccess: boolean;
  unreadMessages: number;
}
export const mainCaregiverToolbarInitial: IMainCaregiverToolbarReducer = {
  current: 'profiel',
  isOpen: false,
  isUnreadMessagesFetch: false,
  isUnreadMessagesFetchSuccess: false,
  unreadMessages: 0
}
export const mainCaregiverToolbarReducer = createReducer(
  mainCaregiverToolbarInitial,
  on(rdxMainCaregiverToolbarOpen, (state: IMainCaregiverToolbarReducer) => {
    return {
      ...state,
      isOpen: true
    }
  }),
  on(rdxMainCaregiverToolbarClose, (state: IMainCaregiverToolbarReducer) => {
    return {
      ...state,
      isOpen: false
    }
  }),
  on(rdxMainCaregiverToolbarUnreadMessages, (state: IMainCaregiverToolbarReducer) => {
    return {
      ...state,
      isUnreadMessagesFetch: true,
      isUnreadMessagesFetchSuccess: false,
    }
  }),
  on(rdxMainCaregiverToolbarUnreadMessagesSuccess, (state: IMainCaregiverToolbarReducer, action) => {
    return {
      ...state,
      isUnreadMessagesFetch: false,
      isUnreadMessagesFetchSuccess: true,
      unreadMessages: action.payload!
    }
  })
)
