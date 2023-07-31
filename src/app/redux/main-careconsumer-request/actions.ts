import { Time } from "@angular/common";
import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IMainCareconsumerRequestFetch {
  task: string;
  description: string;
  interval: string;
  // date: Date | null;
  // time: Time;
  // compensation: number | null;
}
export const RDX_MAIN_CARECONSUMER_REQUEST_FETCH = 'RDX_MAIN_CARECONSUMER_REQUEST_FETCH';
export const rdxMainCareconsumerRequestFetch = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_FETCH,
  props<IAschacCreate<IMainCareconsumerRequestFetch>>()
)
export const RDX_MAIN_CARECONSUMER_REQUEST_FETCH_SUCCESS = 'RDX_MAIN_CARECONSUMER_REQUEST_FETCH_SUCCESS';
export const rdxMainCareconsumerRequestFetchSuccess = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_FETCH_SUCCESS,
  props<IAschacCreate<number>>()
)
export interface IMainCareconsumerRequestFetchError {
  title: string;
  status: number;
  traceId: string;
  errors: IMainCareconsumerRequestFetchErrorErrors;
}
export interface IMainCareconsumerRequestFetchErrorErrors {
  [key: string] : []
}
export const RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR = 'RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR';
export const rdxMainCareconsumerRequestFetchError = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_FETCH_ERROR,
  props<IAschacCreate<IMainCareconsumerRequestFetchError>>()
)
export const RDX_MAIN_CARECONSUMER_REQUEST_RESET = 'RDX_MAIN_CARECONSUMER_REQUEST_RESET';
export const rdxMainCareconsumerRequestReset = createAction(
  RDX_MAIN_CARECONSUMER_REQUEST_RESET
)

