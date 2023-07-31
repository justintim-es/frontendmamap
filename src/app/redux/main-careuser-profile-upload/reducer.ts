import { createReducer, on } from "@ngrx/store";
import { rdxMainCareuserProfileUploadFetch, rdxMainCareuserProfileUploadFetchError, rdxMainCareuserProfileUploadFetchSuccess, rdxMainCareuserProfileUploadReset } from "./actions";

export interface IMainCareuserProfileUploadReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchError: any;
}
const mainCareuserProfileUploadInitial: IMainCareuserProfileUploadReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: null
}
export const mainCareuserProfileUploadReducer = createReducer(
  mainCareuserProfileUploadInitial,
  on(rdxMainCareuserProfileUploadFetch, (state: IMainCareuserProfileUploadReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isfetchError: false,
      fetchError: null
    }
  }),
  on(rdxMainCareuserProfileUploadFetchSuccess, (state: IMainCareuserProfileUploadReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxMainCareuserProfileUploadFetchError, (state: IMainCareuserProfileUploadReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  }),
  on(rdxMainCareuserProfileUploadReset, (state: IMainCareuserProfileUploadReducer) => {
    return mainCareuserProfileUploadInitial
  })
)
