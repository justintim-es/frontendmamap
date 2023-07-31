import { Time } from "@angular/common";
import { createAction, props } from "@ngrx/store";
import { List } from "immutable";
import { IAschacCreate, IAschacDispatch } from "../combiner";
import { RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_OFFER_FETCH } from "../main-careuser-messages-conversation-offer/actions";
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH';
export const rdxMainCareuserMessagesConversationReadFetch = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH,
  props<IAschacCreate<string>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH_SUCCESS';
export const rdxMainCareuserMessagesConversationReadFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_READ_FETCH_SUCCESS,
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES';
export const rdxMainCareuserMessagesConversationMessages = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES,
  props<IAschacCreate<string>>()
)
export interface IMainCareuserMessagesConversationFetchSuccessCareRequestAppointmentPaymentRequest {
  url: string;
}
export interface IMainCareuserMessagesConversationFetchSuccessCareRequestAppointmentReview {
  stars: number;
}
export interface IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment {
  id?: number | null;
  // idx: number;
  date?: Date | null;
  time?: string | null;
  compensation?: number | null;
  isAccepted: boolean;
  isAccept: boolean;
  paymentRequest?: IMainCareuserMessagesConversationFetchSuccessCareRequestAppointmentPaymentRequest | null;
  review?: IMainCareuserMessagesConversationFetchSuccessCareRequestAppointmentReview | null;
  isOccupied: boolean;
}
export interface IMainCareuserMessagesConversationFetchSuccessCareRequest {
  id: number;
  task: string;
  description: string;
  interval: string;
  careConsumerId: string;
  isCareConsumer: boolean;
  appointment?: IMainCareuserMessagesConversationFetchSuccessCareRequestAppointment | null;
}
export interface IMainCareuserMessagesConversationFetchSuccessCareUser {
  firstName: string;
  lastName: string;
  hasImage: boolean;
}
enum ChatMessageButtonEnum {
  Nothing,
  ToOffer,
  ToPay,
  ToAccept
}
export interface IMainCareuserMessagesConversationFetchSuccess {
  id: number;
  content?: string;
  careRequest?: IMainCareuserMessagesConversationFetchSuccessCareRequest | null;
  careRequestId?: number;
  senderId: string;
  sender: IMainCareuserMessagesConversationFetchSuccessCareUser;
  recieverId: string;
  reciever: IMainCareuserMessagesConversationFetchSuccessCareUser;
  seen: boolean;
  amISender: boolean;
  date: Date;
  shouldRenderTile: boolean;
  alwaysRenderTile: boolean;
  chatMessageButtonEnum: string;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES_SUCCESS';
export const rdxMainCareuserMessagesConversationMessagesSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_MESSAGES_SUCCESS,
  props<IAschacCreate<IMainCareuserMessagesConversationFetchSuccess[]>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_APPOINTMENTID_ADD = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_APPOINTMENTID_ADD';
export const rdxMainCareuserMessagesConversationAppointmentIdAdd = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_APPOINTMENTID_ADD,
  props<IAschacCreate<number>>()
);
export interface IMainCareuserMessagesConversationWriteFetch {
  content: string;
  recieverId: string;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH';
export const rdxMainCareuserMessagesConversationWriteFetch = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH,
  props<IAschacCreate<IMainCareuserMessagesConversationWriteFetch>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_SUCCESS';
export const rdxMainCareuserMessagesConversationWriteFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_SUCCESS,
  props<IAschacCreate<string>>()
)
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR';
export const rdxMainCareuserMessagesConversationWriteFetchError = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_WRITE_FETCH_ERROR,
)
export interface IMainCareuserMessagesConversationCaregiverAcceptFetch {
  cmId: number;
  appId: number;
  index: number;
  to: string;
  appIndex: number;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT';
export const rdxMainCareuserMessagesConversationCaregiverAcceptFetch = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH,
  props<IAschacCreate<IMainCareuserMessagesConversationCaregiverAcceptFetch>>()
)
export interface IMainCareuserMessagesConversationCaregiverAcceptFetchSuccess {
  index: number;
  appid: number;
  to: string;
  appIndex: number;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_SUCCESS';
export const rdxMainCareuserMessagesConversationCaregiverAcceptFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_SUCCESS,
  props<IAschacCreate<IMainCareuserMessagesConversationCaregiverAcceptFetchSuccess>>()
)
export interface IMainCareuserMessagesConversationCaregiverAcceptFetchError {
  index: number | undefined;
  appid: number;
  appIndex: number;
}
export const RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_ERROR = 'RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_ERROR';
export const rdxMainCareuserMessagesConversationCaregiverAcceptFetchError = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_CONVERSATION_CAREGIVER_ACCEPT_FETCH_ERROR,
  props<IAschacCreate<IMainCareuserMessagesConversationCaregiverAcceptFetchError>>()
)

