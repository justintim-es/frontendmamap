import { createReducer, on } from "@ngrx/store";
import { IMainCareuserMessagesFetchSuccess, rdxMainCareuserMessagesFetch, rdxMainCareuserMessagesFetchSuccess } from "./actions";

export interface IMainCareuserMessagesReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  conversations: IMainCareuserMessagesFetchSuccess[][];
}
const mainCareuserMessagesInitial: IMainCareuserMessagesReducer = {
  isFetch: false,
  isFetchSuccess: false,
  conversations: []
}
export const mainCareuserMessagesReducer = createReducer(
  mainCareuserMessagesInitial,
  on(rdxMainCareuserMessagesFetch, (state: IMainCareuserMessagesReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      conversations: []
    }
  }),
  on(rdxMainCareuserMessagesFetchSuccess, (state: IMainCareuserMessagesReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      conversations: action.payload!
    }
  })
)
