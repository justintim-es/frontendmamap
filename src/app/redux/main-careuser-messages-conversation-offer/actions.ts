import { Time } from "@angular/common";
import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";
export interface IMainCareuserMessagesConversationOfferCareRequest {
  to: string;
  appId: number;
  id: number;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST';
export const rdxMainCareuserMessagesConversationOfferCareRequest = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST,
  props<IAschacCreate<IMainCareuserMessagesConversationOfferCareRequest>>()
)
export interface IMainCareuserMessagesConversationOfferCareRequestSuccessAppointment {
  date: Date | null;
  time: string | null;
  compensation: number | null;
}
export interface IMainCareuserMessagesConversationOfferCareRequestSuccess {
  task: string;
  description: string;
  interval: string;
  appointment: IMainCareuserMessagesConversationOfferCareRequestSuccessAppointment | null;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS';
export const rdxMainCareuserMessagesConversationOfferCareRequestSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_CARE_REQUEST_SUCCESS,
  props<IAschacCreate<IMainCareuserMessagesConversationOfferCareRequestSuccess>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE';
export const rdxMainCareuserMessagesConversationOfferHasImage = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE,
  props<IAschacCreate<string>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS';
export const rdxMainCareuserMessagesConversationOfferHasImageSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_HAS_IMAGE_SUCCESS,
  props<IAschacCreate<boolean>>()
)
export interface IMainCareuserMessagesConversationOfferFetch {
  repeat: boolean;
  requestId: number;
  appointmentId: number;
  to: string;
  date: Date | null | undefined;
  time: string | null | undefined;
  compensation: number | null | undefined;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH';
export const rdxMainCareuserMessagesConversationOfferFetch = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH,
  props<IAschacCreate<IMainCareuserMessagesConversationOfferFetch>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS';
export const rdxMainCareuserMessagesConversationOfferFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_SUCCESS,
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_REPEAT_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_REPEAT_FETCH_SUCCESS';
export const rdxMainCareuserMessagesConversationOfferRepeatFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_REPEAT_FETCH_SUCCESS
)
export interface IMainCareuserMessagesConversationOfferFetchError400 {
  title: string;
  status: number;
  traceId: string;
  errors: IMainCareuserMessagesConversationOfferFetchErrorErrors;
}
export interface IMainCareuserMessagesConversationOfferFetchErrorErrors {
  [key: string] : []
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_ERROR = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_ERROR';
export const rdxMainCareuserMessagesConversationOfferFetchError = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_ERROR,
  props<IAschacCreate<IMainCareuserMessagesConversationOfferFetchError400>>()
)

export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_RESET = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_RESET';
export const rdxMainCareuserMessagesConversationOfferReset = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_RESET
)

// export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT';
// export const rdxMainCareuserMessagesConversationOfferFetchDeleteAppointment = createAction(
//   RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT,
//   props<IAschacCreate<number>>()
// )
// export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT_SUCCESS';
// export const rdxMainCareuserMessagesConversationOfferFetchDeleteAppointmentSuccess = createAction(
//   RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH_DELETE_APPOINTMENT_SUCCESS
// )
