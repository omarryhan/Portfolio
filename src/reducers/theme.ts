import * as types from '../constants/actionTypes';
import { Action } from '../actions/types';
import { ThemeType } from './types';


const initialState: ThemeType = Object.freeze({
  isDark: false,
});

export default (
  state: typeof initialState = initialState,
  action: Action,
): ThemeType => {
  const update = (
    (
      current: ThemeType,
    ): (next: ThemeType
      ) => ThemeType => (
      next: ThemeType,
    ): ThemeType => ({ ...current, ...next })
  )(state);

  switch (action.type) {
    case types.SET_IS_DARK_THEME:
      return update({ isDark: action.value });

    default:
      return state;
  }
};
