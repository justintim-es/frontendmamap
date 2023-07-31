import { RouterState } from "@angular/router";
import { getRouterSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";

export const getRouterFeatureState = createFeatureSelector<RouterReducerState>('routerReducer');

export const getRouterStateUrl = createSelector(
  getRouterFeatureState,
  state => state.state.url
)
