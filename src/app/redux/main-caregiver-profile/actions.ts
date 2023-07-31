import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CAREGIVER_PROFILE_FETCH = 'RDX_MAIN_CAREGIVER_PROFILE_FETCH';
export const rdxMainCaregiverProfileFetch = createAction(
  RDX_MAIN_CAREGIVER_PROFILE_FETCH
)
export interface IMainCaregiverProfileFetchSuccess {
  profileImage: boolean;
  firstName: string;
  biography: string;
}
export const RDX_MAIN_CAREGIVER_PROFILE_FETCH_SUCCESS = 'RDX_MAIN_CAREGIVER_PROFILE_FETCH_SUCCESS';
export const rdxMainCaregiverProfileFetchSuccess = createAction(
  RDX_MAIN_CAREGIVER_PROFILE_FETCH_SUCCESS,
  props<IAschacCreate<IMainCaregiverProfileFetchSuccess>>()
)
export interface IMainCaregiverProfileBiographyFetch {
  biography: string;
}
export const RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH  = 'RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH';
export const rdxMainCaregiverProfileBiographyFetch = createAction(
  RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH,
  props<IAschacCreate<IMainCaregiverProfileBiographyFetch>>()
)
export const RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH_SUCCESS = 'RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH_SUCCESS';
export const rdxMainCaregivverProfileBiographyFetchSuccess = createAction(
  RDX_MAIN_CAREGIVER_PROFILE_BIOGRAPHY_FETCH_SUCCESS
)
