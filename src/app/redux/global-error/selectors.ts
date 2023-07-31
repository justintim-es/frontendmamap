import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGlobalErrorReducer } from "./reducer";

const getGlobalErrorFeatureState = createFeatureSelector<IGlobalErrorReducer>('globalErrorReducer');
export const getGlobalErrorIs = createSelector(
  getGlobalErrorFeatureState,
  state => state.is
)
