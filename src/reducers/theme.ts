import * as types from '../constants/actionTypes';
import { Action } from '../actions/types';
import { ThemeI } from './types';


const initialState: ThemeI = Object.freeze({
  isDark: false,
});

export default (
  state: ThemeI = initialState,
  action: Action,
): ThemeI => {
  // eslint-disable-next-line max-len
  // const update = <T1 extends {}>((current: T1): (next: any) => T1 => (next: T1): T1 => ({ ...current, ...next }))(state);

  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type @typescript-eslint/no-explicit-any
  // eslint-disable-next-line
  // const update = (current: ThemeType) => (next: any) => ({ ...current, ...next })(state);

  switch (action.type) {
    case types.SET_IS_DARK_THEME:
      return {
        ...state,
        isDark: action.value,
      };
      // return update({ isDark: action.value });

    default:
      return state;
  }
};
