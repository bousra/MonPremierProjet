export enum DataStateEnum {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

export enum ProductActionsTypes {
  GET_ALL_PRODUCTS = '[Product] Get All Products',
  GET_SELECTED_PRODUCTS = '[Product] Get selected Products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available Products',
  SEARCH_PRODUCTS = '[Product] Search Products',
  NEW_PRODUCTS = '[Product] New Products'
}

export interface ActionEvent{
  type: ProductActionsTypes;
  payload?: any;
}
export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}
