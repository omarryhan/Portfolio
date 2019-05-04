import { SET_IS_DARK_THEME } from '../constants/types'


export const setIsDark = isDark => ({
    type: SET_IS_DARK_THEME,
    value: isDark,
});
