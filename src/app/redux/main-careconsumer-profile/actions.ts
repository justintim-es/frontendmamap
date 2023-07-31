import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH';
export const rdxMainCareconsumerProfileFetch = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH
)
export interface IMainCareconsumerProfileFetchSuccessAppointmentPaymentrequest {
  url: string;
}
export interface IMainCareconsumerProfileFetchSuccessAppointmentCareRequest {
  id: number;
  task: string;
  description: string;
  interval: string;
  careConsumerId: string;
  isCareConsumer: boolean;
  appointment: IMainCareconsumerProfileFetchSuccessAppointment;
}
export interface IMainCareconsumerProfileFetchSuccessAppointmentCareGiver {
  firstName: string;
  lastName: string;
}
export interface IMainCareconsumerProfileFetchSuccessAppointment {
  id: number;
  date: Date;
  time: string;
  compensation: number;
  isAccepted: boolean;
  careGiver: IMainCareconsumerProfileFetchSuccessAppointmentCareGiver;
  careGiverId: string;
  paymentRequest: IMainCareconsumerProfileFetchSuccessAppointmentPaymentrequest;
  careRequest: IMainCareconsumerProfileFetchSuccessAppointmentCareRequest;
  hasImg: boolean;
  isFetchRepeat: boolean;
}
export interface IMainCareconsumerProfileFetchSuccess {
  profileImage: boolean;
  planned: IMainCareconsumerProfileFetchSuccessAppointment[];
  passed: IMainCareconsumerProfileFetchSuccessAppointment[];
}
export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH_SUCCESS = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH_SUCCESS';
export const rdxMainCareconsumerProfileFetchSuccess = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH_SUCCESS,
  props<IAschacCreate<IMainCareconsumerProfileFetchSuccess>>()
)
export interface IMainCareconsumerProfileHasOpponentImage {
  index: number;
  id: string;
}
export const RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED  = 'RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED';
export const rdxMainCareconsumerProfileHasOpponentImagePlanned = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED,
  props<IAschacCreate<IMainCareconsumerProfileHasOpponentImage>>()
)
export const RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED  = 'RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED';
export const rdxMainCareconsumerProfileHasOpponentImagePassed = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED,
  props<IAschacCreate<IMainCareconsumerProfileHasOpponentImage>>()
)
export interface IMainCareconsumerProfileHasOpponentImageSuccess {
  index: number;
  has: boolean;
}
export const RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED_SUCCESS = 'RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED_SUCCESS';
export const rdxMainCareconsumerProfileHasOpponentImagePlannedSuccess = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PLANNED_SUCCESS,
  props<IAschacCreate<IMainCareconsumerProfileHasOpponentImageSuccess>>()
)
export const RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED_SUCCESS = 'RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED_SUCCESS';
export const rdxMainCareconsumerProfileHasOpponentImagePassedSuccess = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_HAS_OPPONENT_IMAGE_PASSED_SUCCESS,
  props<IAschacCreate<IMainCareconsumerProfileHasOpponentImageSuccess>>()
)

export interface IMainCareconsumerProfileFetchRepeatAppointment {
  index: number;
  careGiverId: string;
  careRequestId: number;
}
export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED';
export const rdxMainCareconsumerProfileFetchRepeatAppointmentPlanned = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED,
  props<IAschacCreate<IMainCareconsumerProfileFetchRepeatAppointment>>()
)
export interface IMaincareconsumerProfileFetchRepeatAppointmentSuccess {
  index: number;
  appId: number;
}
export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED_SUCCESS = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED_SUCCESS';
export const rdxMainCareconsumerProfileFetchRepeatAppointmentPlannedSuccess = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PLANNED_SUCCESS,
  props<IAschacCreate<IMaincareconsumerProfileFetchRepeatAppointmentSuccess>>()
)
export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED';
export const rdxMainCareconsumerProfileFetchRepeatAppointmentPassed = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED,
  props<IAschacCreate<IMainCareconsumerProfileFetchRepeatAppointment>>()
)
export const RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED_SUCCESS = 'RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED_SUCCESS';
export const rdxMainCareconsumerProfileFetchRepeatAppointmentPassedSuccess = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_FETCH_REPEAT_APPOINTMENT_PASSED_SUCCESS,
  props<IAschacCreate<IMaincareconsumerProfileFetchRepeatAppointmentSuccess>>()
)
export const RDX_MAIN_CARECONSUMER_PROFILE_IS_ROUTE_REPEAT_FALSE = 'RDX_MAIN_CARECONSUMER_PROFILE_IS_ROUTE_REPEAT_FALSE';
export const rdxMainCareconsumerProfileIsRouteRepeatFalse = createAction(
  RDX_MAIN_CARECONSUMER_PROFILE_IS_ROUTE_REPEAT_FALSE
)
