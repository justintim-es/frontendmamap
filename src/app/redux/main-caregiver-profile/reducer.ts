import { createReducer, on } from "@ngrx/store";
import { rdxMainCaregiverProfileBiographyFetch, rdxMainCaregiverProfileFetch, rdxMainCaregiverProfileFetchSuccess, rdxMainCaregivverProfileBiographyFetchSuccess } from "./actions";

export interface IMainCaregiverProfileReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  profileImage: boolean;
  firstName: string;
  biography: string;
  isBiographyFetch: boolean;
}
export const mainCaregiverProfileInitial: IMainCaregiverProfileReducer = {
  isFetch: false,
  isFetchSuccess: false,
  profileImage: false,
  firstName: '',
  biography: '',
  isBiographyFetch: false,
}
export const mainCaregiverProfileReducer = createReducer(
  mainCaregiverProfileInitial,
  on(rdxMainCaregiverProfileFetch, (state: IMainCaregiverProfileReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      profileImage: false
    }
  }),
  on(rdxMainCaregiverProfileFetchSuccess, (state: IMainCaregiverProfileReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      profileImage: action.payload?.profileImage!,
      firstName: action.payload?.firstName!,
      biography: action.payload?.biography!
    }
  }),
  on(rdxMainCaregiverProfileBiographyFetch, (state: IMainCaregiverProfileReducer) => {
    return {
      ...state,
      isBiographyFetch: true
    }
  }),
  on(rdxMainCaregivverProfileBiographyFetchSuccess, (state: IMainCaregiverProfileReducer) => {
    return {
      ...state,
      isBiographyFetch: false
    }
  })
)
