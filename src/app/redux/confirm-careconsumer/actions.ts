import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IConfirmCareconsumerFetch {
  id: string;
  token: string;
}
export const RDX_CONFIRM_CARECONSUMER_FETCH = 'RDX_CONFIRM_CARECONSUMER_FETCH';
export const rdxConfirmCareconsumerFetch = createAction(
  RDX_CONFIRM_CARECONSUMER_FETCH,
  props<IAschacCreate<IConfirmCareconsumerFetch>>()
)
export const RDX_CONFIRM_CARECONSUMER_FETCH_SUCCESS = 'RDX_CONFIRM_CARECONSUMER_FETCH_SUCCESS';
export const rdxConfirmCareconsumerFetchSuccess = createAction(
  RDX_CONFIRM_CARECONSUMER_FETCH_SUCCESS
)
export const RDX_CONFIRM_CARECONSUMER_IS_ROUTE_LOGIN_TRUE = 'RDX_CONFIRM_CARECONSUMER_IS_ROUTE_LOGIN_TRUE';
export const rdxConfirmCareconsumerIsRouteLoginTrue = createAction(
  RDX_CONFIRM_CARECONSUMER_IS_ROUTE_LOGIN_TRUE
)
export interface IConfirmCareconsumerFetchError400 {
  title: string;
  subtitle: string;
  url: string;
}
export const RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_400 = 'RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_400';
export const rdxConfirmCareconsumerFetchError400 = createAction(
  RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_400,
  props<IAschacCreate<IConfirmCareconsumerFetchError400>>()
)
export const RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_422 = 'RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_422';
export const rdxConfirmCareconsumerFetchError422 = createAction(
  RDX_CONFIRM_CARECONSUMER_FETCH_ERROR_422,
  props<IAschacCreate<any>>()
)
