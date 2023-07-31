import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CAREGIVER_TOOLBAR_OPEN = 'RDX_MAIN_CAREGIVER_TOOLBAR_OPEN';
export const rdxMainCaregiverToolbarOpen = createAction(
    RDX_MAIN_CAREGIVER_TOOLBAR_OPEN
)
export const RDX_MAIN_CAREGIVER_TOOLBAR_CLOSE = 'RDX_MAIN_CAREGIVER_TOOLBAR_CLOSE';
export const rdxMainCaregiverToolbarClose = createAction(
    RDX_MAIN_CAREGIVER_TOOLBAR_CLOSE
)
export const RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES = 'RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES';
export const rdxMainCaregiverToolbarUnreadMessages = createAction(
  RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES
)
export const RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES_SUCCESS = 'RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES_SUCCESS';
export const rdxMainCaregiverToolbarUnreadMessagesSuccess = createAction(
  RDX_MAIN_CAREGIVER_TOOLBAR_UNREAD_MESSAGES_SUCCESS,
  props<IAschacCreate<number>>()
)
