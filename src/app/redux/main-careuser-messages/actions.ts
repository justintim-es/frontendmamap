import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CAREUSER_MESSAGES_FETCH = 'RDX_MAIN_CAREUSER_MESSAGES_FETCH';
export const rdxMainCareuserMessagesFetch = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_FETCH
)
export interface IMainCareuserMessagesFetchSuccessCareRequest {
  task: string;
  description: string;
  interval: string;
  date?: Date;
  compensation?: number;
}
export interface IMainCareuserMessagesFetchSuccessCareUser {
  firstName: string;
  lastName: string;
  hasImage: boolean;
}
export interface IMainCareuserMessagesFetchSuccess {
  content?: string;
  careRequest?: IMainCareuserMessagesFetchSuccessCareRequest;
  careRequestId?: number;
  senderId: string;
  sender: IMainCareuserMessagesFetchSuccessCareUser;
  recieverId: string;
  reciever: IMainCareuserMessagesFetchSuccessCareUser;
  seen: boolean;
  amISender: boolean;
}
export const RDX_MAIN_CAREUSER_MESSAGES_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_MESSAGES_FETCH_SUCCESS';
export const rdxMainCareuserMessagesFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_MESSAGES_FETCH_SUCCESS,
  props<IAschacCreate<IMainCareuserMessagesFetchSuccess[][]>>()
)
