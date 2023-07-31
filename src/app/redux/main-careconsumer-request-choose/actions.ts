import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS = 'RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS';
export const rdxMainCareconsumerRequestChooseCaregivers = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS
)

export interface IMainCareconsumerRequestChooseCareGiversSuccessAppointment {
  review?: IMainCareconsumerRequestChooseCaregiversSuccessAppointmentReview | null;
  careRequest: IMainCareconsumerRequestChooseCaregiversSuccessAppointmentCareRequest
}
export interface IMainCareconsumerRequestChooseCaregiversSuccessAppointmentReview {
  stars: number;
}
export interface IMainCareconsumerRequestChooseCaregiversSuccessAppointmentCareRequest {
  task: string;
  description: string;
}
export interface IMainCareconsumerRequestChooseCareGiversSuccessCourse {
  name: string;
  passed: boolean;
}
export interface IMainCareconsumerRequestChooseCaregiversSuccessCaregivers {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  age: number;
  course: IMainCareconsumerRequestChooseCareGiversSuccessCourse | null;
  biography: string;
  hasImage: boolean;
  averageStars: number;
  appointments: IMainCareconsumerRequestChooseCareGiversSuccessAppointment[];
}
export interface IMainCareconsumerRequestChooseCaregiversSuccess {
  city: string;
  degreedCareGivers: IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[];
  undegreedCareGivers: IMainCareconsumerRequestChooseCaregiversSuccessCaregivers[];
}

export const RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS_SUCCESS = 'RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS_SUCCESS';
export const rdxMainCareconsumerRequestChooseCaregiversSuccess = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVERS_SUCCESS,
  props<IAschacCreate<IMainCareconsumerRequestChooseCaregiversSuccess>>()
)
export const RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED = 'RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED';
export const rdxMainCareconsumerRequestChooseCaregiverAddOrRemoveInvited = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_CAREGIVER_ADD_OR_REMOVE_INVITED,
  props<IAschacCreate<string>>()
)
export const RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH = 'RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH';
export const rdxMainCareconsumerRequestChooseInviteFetch = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH,
  props<IAschacCreate<number>>()
)
export const RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH_SUCCESS = 'RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH_SUCCESS';
export const rdxMainCareconsumerRequestChooseInviteFetchSuccess = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_CHOOSE_INVITE_FETCH_SUCCESS,
)
