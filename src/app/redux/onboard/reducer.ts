import { createReducer, on } from "@ngrx/store";
import { rdxOnboardLink, rdxOnboardLinkError, rdxOnboardLinkSuccess } from "./actions";

export interface IOnboardReducer {
  isFetchSuccess: boolean;
  url: string;
  isFetchError: boolean;
  fetchError: any;
}
export const onboardInitial: IOnboardReducer = {
  isFetchSuccess: false,
  url: '',
  isFetchError: false,
  fetchError: null
}
export const onboardReducer = createReducer(
  onboardInitial,
  on(rdxOnboardLinkSuccess, (state: IOnboardReducer, action) => {
    return {
      ...state,
      isFetchSuccess: true,
      url: action.payload!
    }
  }),
  on(rdxOnboardLinkError, (state: IOnboardReducer, action) => {
    return {
      ...state,
      isFetchError: true,
      fetchError: action.payload!
    }
  })

)
