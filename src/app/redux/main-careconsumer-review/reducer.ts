import { createReducer, on } from "@ngrx/store";
import { IMainCareconsumerReviewFetchNewError, rdxMainCareconsumerReviewFetchFname, rdxMainCareconsumerReviewFetchFnameSuccess, rdxMainCareconsumerReviewFetchNew, rdxMainCareconsumerReviewFetchNewError400, rdxMainCareconsumerReviewFetchNewError405, rdxMainCareconsumerReviewFetchNewSuccess } from "./actions";

export interface IMainCareconsumerReviewReducer {
  isFetchFname: boolean;
  isFetchFnameSuccess: boolean;
  fName: string;
  isFetchNew: boolean;
  isFetchNewSuccess: boolean;
  isFetchNewError400: boolean;
  fetchNewError400: IMainCareconsumerReviewFetchNewError | null;
  isFetchNewError405: boolean;
  fetchNewError405: string;
}
export const mainCareconsumerReviewInitial: IMainCareconsumerReviewReducer = {
  isFetchFname: false,
  isFetchFnameSuccess: false,
  fName: '',
  isFetchNew: false,
  isFetchNewSuccess: false,
  isFetchNewError400: false,
  fetchNewError400: null,
  isFetchNewError405: false,
  fetchNewError405: ''
}

export const mainCareconsumerReviewReducer = createReducer(
  mainCareconsumerReviewInitial,
  on(rdxMainCareconsumerReviewFetchFname, (state: IMainCareconsumerReviewReducer) => {
    return {
      ...state,
      isFetchFname: true,
      isFetchFnameSuccess: false
    }
  }),
  on(rdxMainCareconsumerReviewFetchFnameSuccess, (state: IMainCareconsumerReviewReducer, action) => {
    return {
      ...state,
      isFetchFname: false,
      isFetchFnameSuccess: true,
      fName: action.payload!
    }
  }),
  on(rdxMainCareconsumerReviewFetchNew, (state: IMainCareconsumerReviewReducer) => {
    return {
      ...state,
      isFetchNew: true,
      isFetchNewSuccess: false,
      isFetchNewError: false,
    }
  }),
  on(rdxMainCareconsumerReviewFetchNewSuccess, (state: IMainCareconsumerReviewReducer, action) => {
    return {
      ...state,
      isFetchNew: false,
      isFetchNewSuccess: true
    }
  }),
  on(rdxMainCareconsumerReviewFetchNewError400, (state: IMainCareconsumerReviewReducer, action) => {
    return {
      ...state,
      isFetchNew: false,
      isFetchNewError400: true,
      fetchNewError400: action.payload!
    }
  }),
  on(rdxMainCareconsumerReviewFetchNewError405, (state: IMainCareconsumerReviewReducer, action) => {
    return {
      ...state,
      isFetchNew: false,
      isFetchNewError405: true,
      fetchNewError405: action.payload!
    }
  })
)
