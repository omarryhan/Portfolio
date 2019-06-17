import { SET_IS_DARK_THEME } from '../constants/actionTypes';
import { SetIsDarkActionI } from './types';


export const setIsDark = (isDark: boolean): SetIsDarkActionI => Object.freeze({
  type: SET_IS_DARK_THEME,
  value: isDark,
});
