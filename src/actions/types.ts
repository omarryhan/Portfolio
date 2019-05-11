import { SET_IS_DARK_THEME, SET_IS_LOADING } from '../constants/actionTypes';


export interface SetIsDarkAction {
  readonly type: typeof SET_IS_DARK_THEME;
  readonly value: boolean;
}

export interface SetIsLoadingAction {
  readonly type: typeof SET_IS_LOADING;
  readonly value: boolean;
}

export type Action =
    | SetIsDarkAction
    | SetIsLoadingAction;
