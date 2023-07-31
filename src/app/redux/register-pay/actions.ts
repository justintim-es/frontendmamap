import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IRegisterPayLink {
  id: string;
  token: string;
}
export const RDX_REGISTER_PAY_LINK = 'RDX_REGISTER_PAY_LINK';
export const rdxRegisterPayLink = createAction(
  RDX_REGISTER_PAY_LINK,
  props<IAschacCreate<IRegisterPayLink>>()
)
export const RDX_REGISTER_PAY_LINK_SUCCESS = 'RDX_REGISTER_PAY_LINK_SUCCESS';
export const rdxRegisterPayLinkSuccess = createAction(
  RDX_REGISTER_PAY_LINK_SUCCESS,
  props<IAschacCreate<string>>()
)
export const RDX_REGISTER_PAY_LINK_ERROR = 'RDX_REGISTER_PAY_LINK_ERROR';
export const rdxRegisterPayLinkError = createAction(
  RDX_REGISTER_PAY_LINK_ERROR,
  props<IAschacCreate<any>>()
)
