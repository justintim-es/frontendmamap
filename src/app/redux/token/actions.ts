import { createAction, props } from "@ngrx/store";
import { IAschacCreate } from "../combiner";

export const RDX_TOKEN_SET = 'RDX_TOKEN_SET';
export const rdxTokenSet = createAction(
  RDX_TOKEN_SET,
  props<IAschacCreate<string>>()
)
