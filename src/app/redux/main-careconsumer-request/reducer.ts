import { createReducer, on } from "@ngrx/store";
import { IMainCareconsumerRequestFetchError, rdxMainCareconsumerRequestFetch, rdxMainCareconsumerRequestFetchError, rdxMainCareconsumerRequestFetchSuccess, rdxMainCareconsumerRequestReset } from "./actions";

export interface IMainCareconsumerRequestReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  requestId: number;
  isFetchError: boolean;
  fetchError: IMainCareconsumerRequestFetchError | null;
}
export const mainCareconsumerRequestInitial: IMainCareconsumerRequestReducer = {
  isFetch: false,
  isFetchSuccess: false,
  requestId: 0,
  isFetchError: false,
  fetchError: null
}
export const mainCareconsumerRequestReducer = createReducer(
  mainCareconsumerRequestInitial,
  on(rdxMainCareconsumerRequestFetch, (state: IMainCareconsumerRequestReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchError: null
    }
  }),
  on(rdxMainCareconsumerRequestFetchSuccess, (state: IMainCareconsumerRequestReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      requestId: action.payload!
    }
  }),
  on(rdxMainCareconsumerRequestFetchError, (state: IMainCareconsumerRequestReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  }),
  on(rdxMainCareconsumerRequestReset, (state: IMainCareconsumerRequestReducer) => {
    return mainCareconsumerRequestInitial
  })
)
