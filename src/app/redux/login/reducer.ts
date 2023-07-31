  import { createReducer, on } from "@ngrx/store";
import { rdxLoginFetchCareconsumer, rdxLoginFetchCaregiver, rdxLoginFetchError400, rdxLoginFetchError422, rdxLoginFetchCaregiverSuccess, rdxLoginFetchCareconsumerSuccess } from "./actions";

export interface ILoginReducer {
    isFetch: boolean;
    isFetchCaregiverSuccess: boolean;
    isFetchCareconsumerSuccess: boolean;
    isFetchError400: boolean;
    isFetchErrorLockedOut: boolean;
    isFetchErrorNotAllowed: boolean;
    fetchError: string;
    id: string;
    keepId: string;
}
export const loginInitial: ILoginReducer = {
    isFetch: false,
    isFetchCaregiverSuccess: false,
    isFetchCareconsumerSuccess: false,
    isFetchError400: false,
    isFetchErrorLockedOut: false,
    isFetchErrorNotAllowed: false,
    fetchError: '',
    id: '',
    keepId: ''
}
export const loginReducer = createReducer(
  loginInitial,
  on(rdxLoginFetchCaregiver, (state: ILoginReducer) => {
    return {
        ...state,
        isFetch: true,
        isFetchCaregiverSuccess: false,
        isFetchCareconsumerSuccess: false,
        isFetchError400: false,
        isFetchErrorLockedOut: false,
        isFetchErrorNotAllowed: false,
        fetchError: ''
    }
  }),
  on(rdxLoginFetchCareconsumer, (state: ILoginReducer) => {
    return {
        ...state,
        isFetch: true,
        isFetchCaregiverSuccess: false,
        isFetchCareconsumerSuccess: false,
        isFetchError400: false,
        isFetchErrorLockedOut: false,
        isFetchErrorNotAllowed: false,
        fetchError: ''
    }
  }),
  on(rdxLoginFetchCaregiverSuccess, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetchCaregiverSuccess: true,
      id: action.payload?.id!
    }
  }),
  on(rdxLoginFetchCareconsumerSuccess, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetchCareconsumerSuccess: true,
      id: action.payload?.id!
    }
  }),
  on(rdxLoginFetchError400, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetchError400: true,
      fetchError: action.payload!
    }
  }),
  on(rdxLoginFetchError422, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetchErrorLockedOut: action.payload!.isLockedOut,
      isFetchErrorNotAllowed: action.payload!.isNotAllowed
    }
  })
)
