import { createReducer } from "@ngrx/store";

export interface IUrlsReducer {
    img: string;
}
const urlsInitial: IUrlsReducer = {
  img: 'http://localhost:5192'
}
export const urlsReducer = createReducer(
  urlsInitial
)
