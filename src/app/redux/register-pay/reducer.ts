import { createReducer, on } from "@ngrx/store";
import { rdxRegisterPayLink, rdxRegisterPayLinkError, rdxRegisterPayLinkSuccess } from "./actions";

export interface IRegisterPayReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: any;
    url: string;
}
export const registerPayInitial: IRegisterPayReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: null,
  url: ''
}
export const registerPayReducer = createReducer(
  registerPayInitial,
  on(rdxRegisterPayLink, (state: IRegisterPayReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchError: null
    }
  }),
  on(rdxRegisterPayLinkSuccess, (state: IRegisterPayReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      url: action.payload!
    }
  }),
  on(rdxRegisterPayLinkError, (state: IRegisterPayReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  })
)
