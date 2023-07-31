import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME';
export const rdxMainCareconsumerReviewFetchFname = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME,
  props<IAschacCreate<string>>()
)
export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME_SUCCESS = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME_SUCCESS';
export const rdxMainCareconsumerReviewFetchFnameSuccess = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_FNAME_SUCCESS,
  props<IAschacCreate<string>>()
)

export interface IMainCareconsumerReviewFetchNew {
  cmId: number;
  appId: number;
  caregiver: string;
  rating: number;
  comment: string;
}
export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW';
export const rdxMainCareconsumerReviewFetchNew = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW,
  props<IAschacCreate<IMainCareconsumerReviewFetchNew>>()
)
export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_SUCCESS = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_SUCCESS';
export const rdxMainCareconsumerReviewFetchNewSuccess = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_SUCCESS,
  props<IAschacCreate<string>>()
)
export interface IMainCareconsumerReviewFetchNewError {
  title: string;
  status: number;
  traceId: string;
  errors: IMainCarconsumerReviewFetchErrorErrors;
}
export interface IMainCarconsumerReviewFetchErrorErrors {
  [key: string] : []
}
export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_400 = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_400';
export const rdxMainCareconsumerReviewFetchNewError400 = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_400,
  props<IAschacCreate<IMainCareconsumerReviewFetchNewError>>()
)
export const RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_405 = 'RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_405';
export const rdxMainCareconsumerReviewFetchNewError405 = createAction(
  RDX_MAIN_CARECONSUMER_REVIEW_FETCH_NEW_ERROR_405,
  props<IAschacCreate<string>>()
)
