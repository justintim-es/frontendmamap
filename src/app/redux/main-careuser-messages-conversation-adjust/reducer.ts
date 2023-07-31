import { createReducer } from "@ngrx/store";

export interface IMainCareuserMessagesConversationAdjustReducer {
  isCareRequest: boolean;
  isCareRequestSuccess: boolean;
}
const mainCareuserMessagesConversationAdjustInitial: IMainCareuserMessagesConversationAdjustReducer = {
  isCareRequest: true,
  isCareRequestSuccess: true,
}
export const mainCareuserMessagesConversationAdjustReducer = createReducer(
  mainCareuserMessagesConversationAdjustInitial
)
