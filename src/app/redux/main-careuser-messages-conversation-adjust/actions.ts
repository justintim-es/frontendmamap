import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST';
export const rdxMainCareuserMessagesConversationAdjust = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST,
  props<IAschacCreate<number>>()
)
export interface IMainCareuserMessagesConversationAdjustCareRequestSuccess {
  task: string;
  description: string;
  interval: string;

}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST_SUCCESS';
export const rdxMainCareuserMessagesConversationAdjustCareRequestSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_ADJUST_CARE_REQUEST,
)

