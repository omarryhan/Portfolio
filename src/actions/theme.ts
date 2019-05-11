import { SET_IS_DARK_THEME } from '../constants/actionTypes';
import { SetIsDarkAction } from './types';


export const setIsDark = (isDark: boolean): SetIsDarkAction => Object.freeze({
  type: SET_IS_DARK_THEME,
  value: isDark,
});
