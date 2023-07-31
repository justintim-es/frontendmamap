
export interface IAschacDispatch<T> {
    type: string;
    payload?: T;
}
export interface IAschacCreate<T> {
  payload?: T;
}
