import { createReducer, on } from "@ngrx/store";
import { IRegisterCareconsumerFetchError400, rdxRegisterCareconsumerFetch, rdxRegisterCareconsumerFetchError400, rdxRegisterCareconsumerFetchError422, rdxRegisterCareconsumerFetchSuccess } from "./actions";

export interface IRegisterCareConsumerReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError422: boolean;
  fetchError400: IRegisterCareconsumerFetchError400 | null;
  fetchError422: string;
}
export const registerCareConsumerInitial: IRegisterCareConsumerReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError422: false,
  fetchError400: null,
  fetchError422: ''
}
export const registerCareConsumerReducer = createReducer(
  registerCareConsumerInitial,
  on(rdxRegisterCareconsumerFetch, (state: IRegisterCareConsumerReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError422: false,
      fetchError: null,
    }
  }),
  on(rdxRegisterCareconsumerFetchSuccess, (state: IRegisterCareConsumerReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxRegisterCareconsumerFetchError400, (state: IRegisterCareConsumerReducer, action) => {
    return {
      ...state,
      isFetch: false,
      fetchError400: action.payload!
    }
  }),
  on(rdxRegisterCareconsumerFetchError422, (state: IRegisterCareConsumerReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError422: true,
      fetchError422: action.payload!.error
    }
  })
)
