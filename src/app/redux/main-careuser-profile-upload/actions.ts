import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH = 'RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH';
export const rdxMainCareuserProfileUploadFetch = createAction(
  RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH,
  props<IAschacCreate<FormData>>()
)
export const RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_SUCCESS = 'RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_SUCCESS';
export const rdxMainCareuserProfileUploadFetchSuccess = createAction(
  RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_SUCCESS
)
export const RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_ERROR = 'RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_ERROR';
export const rdxMainCareuserProfileUploadFetchError = createAction(
  RDX_MAIN_CAREUSER_PROFILE_UPLOAD_FETCH_ERROR,
  props<IAschacCreate<any>>()
)
export const RDX_MAIN_CAREUSER_PROFILE_UPLOAD_RESET = 'RDX_MAIN_CAREUSER_PROFILE_UPLOAD_RESET';
export const rdxMainCareuserProfileUploadReset = createAction(
  RDX_MAIN_CAREUSER_PROFILE_UPLOAD_RESET
)
