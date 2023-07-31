import { createReducer, on } from "@ngrx/store";
import { rdxGlobalErrorTrue } from "./actions";

export interface IGlobalErrorReducer {
    is: boolean;
}
export const globalErrorInitial: IGlobalErrorReducer = {
    is: false
}
export const globalErrorReducer = createReducer(
  globalErrorInitial,
  on(rdxGlobalErrorTrue, (state: IGlobalErrorReducer) => {
    return {
      ...state,
      is: true
    }
  })
)
