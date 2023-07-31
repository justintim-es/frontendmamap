import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUrlsReducer } from "./reducer";


const getUrlsFeatureState = createFeatureSelector<IUrlsReducer>('urlsReducer');
export const getUrlsImg = createSelector(
  getUrlsFeatureState,
  state => state.img
)
