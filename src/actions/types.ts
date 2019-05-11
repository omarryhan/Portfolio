import { SET_IS_DARK_THEME, SET_IS_LOADING } from '../constants/actionTypes';


export interface IsetIsDarkAction {
  readonly type: typeof SET_IS_DARK_THEME;
  readonly value: boolean;
}

export interface IsetIsLoadingAction {
  readonly type: typeof SET_IS_LOADING;
  readonly value: boolean;
}

export type Action =
    | IsetIsDarkAction
    | IsetIsLoadingAction;
