import { createReducer, on } from "@ngrx/store";
import { IRegisterCaregiverFetchError400, IRegisterCaregiverFetchError422, rdxRegisterCaregiverFetch, rdxRegisterCaregiverFetchError400, rdxRegisterCaregiverFetchError422, rdxRegisterCaregiverFetchSuccess } from "./actions";

export interface IRegisterCaregiverReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError422: boolean;
  fetchError400: IRegisterCaregiverFetchError400 | null;
  fetchError422: string;
}
export const registerCareGiverInitial: IRegisterCaregiverReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError422: false,
  fetchError400: null,
  fetchError422: ''
}
export const registerCareGiverReducer = createReducer(
  registerCareGiverInitial,
  on(rdxRegisterCaregiverFetch, (state: IRegisterCaregiverReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError422: false,
      fetchError: null,
    }
  }),
  on(rdxRegisterCaregiverFetchSuccess, (state: IRegisterCaregiverReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxRegisterCaregiverFetchError400, (state: IRegisterCaregiverReducer, action) => {
    return {
      ...state,
      isFetch: false,
      fetchError400: action.payload!
    }
  }),
  on(rdxRegisterCaregiverFetchError422, (state: IRegisterCaregiverReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError422: true,
      fetchError422: action.payload!.error
    }
  })
)
