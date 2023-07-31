import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IRegisterCaregiverFetch {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  city: string;
  phoneNumber: string;
  course: IRegisterCaregiverFetchCourse | null;
  email: string;
  password: string;
}
export interface IRegisterCaregiverFetchCourse {
  name: string;
  passed: boolean;
}
export const RDX_REGISTER_CAREGIVER_FETCH  = 'RDX_REGISTER_CAREGIVER_FETCH';
export const rdxRegisterCaregiverFetch = createAction(
  RDX_REGISTER_CAREGIVER_FETCH,
  props<IAschacCreate<IRegisterCaregiverFetch>>()
)
export const RDX_REGISTER_CAREGIVER_FETCH_SUCCESS = 'RDX_REGISTER_CAREGIVER_FETCH_SUCCESS';
export const rdxRegisterCaregiverFetchSuccess = createAction(
  RDX_REGISTER_CAREGIVER_FETCH_SUCCESS,
);
export interface IRegisterCaregiverFetchError400 {
  title: string;
  status: number;
  traceId: string;
  errors: IRegisterCargiverFetchErrorErrors;
}
export interface IRegisterCargiverFetchErrorErrors {
  [key: string] : []
}
export const RDX_REGISTER_CAREGIVER_FETCH_ERROR_400 = 'RDX_REGISTER_CAREGIVER_FETCH_ERROR_400';
export const rdxRegisterCaregiverFetchError400 = createAction(
  RDX_REGISTER_CAREGIVER_FETCH_ERROR_400,
  props<IAschacCreate<IRegisterCaregiverFetchError400>>()
)
export interface IRegisterCaregiverFetchError422 {
  error: string;
}
export const RDX_REGISTER_CAREGIVER_FETCH_ERROR_422 =  'RDX_REGISTER_CAREGIVER_FETCH_ERROR_422';
export const rdxRegisterCaregiverFetchError422 = createAction(
  RDX_REGISTER_CAREGIVER_FETCH_ERROR_422,
  props<IAschacCreate<IRegisterCaregiverFetchError422>>()
)
