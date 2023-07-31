import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export interface IOnboardLink {
  id: string;
  token: string;
}
export const RDX_ONBOARD_LINK = 'RDX_ONBOARD_LINK';
export const rdxOnboardLink = createAction(
  RDX_ONBOARD_LINK,
  props<IAschacCreate<IOnboardLink>>()
)
export const RDX_ONBOARD_LINK_SUCCESS = 'RDX_ONBOARD_LINK_SUCCESS';
export const rdxOnboardLinkSuccess = createAction(
  RDX_ONBOARD_LINK_SUCCESS,
  props<IAschacCreate<string>>()
)
export const RDX_ONBOARD_LINK_ERROR = 'RDX_ONBOARD_LINK_ERROR';
export const rdxOnboardLinkError = createAction(
  RDX_ONBOARD_LINK_ERROR,
  props<IAschacCreate<any>>()
)
