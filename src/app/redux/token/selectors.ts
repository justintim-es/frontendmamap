import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITokenReducer } from "./reducer";

const getTokenFeatureState = createFeatureSelector<ITokenReducer>('tokenReducer');

export const getTokenToken = createSelector(
  getTokenFeatureState,
  state => state.token
)
