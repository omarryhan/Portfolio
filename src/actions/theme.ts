import { SET_IS_DARK_THEME } from '../constants/actionTypes';
import { IsetIsDarkAction } from './types';


export const setIsDark = (isDark: boolean): IsetIsDarkAction => Object.freeze({
  type: SET_IS_DARK_THEME,
  value: isDark,
});
