export const COLOR_PALETTE = {
  blue: {
    light: '#005E7C',
    primary: '#001242',
    dark: '#000022',
  },
  black: {
    primary: '#040F16',
  },
  white: {
    primary: '#fff',
  },
};

export const LIGHT_THEME = {
  color: COLOR_PALETTE.black.primary,
  backgroundColor: COLOR_PALETTE.white.primary,
  scrollbarHandleColor: COLOR_PALETTE.blue.primary,
};

export const DARK_THEME = {
  color: COLOR_PALETTE.white.primary,
  backgroundColor: COLOR_PALETTE.blue.primary,
  scrollbarHandleColor: COLOR_PALETTE.white.primary,
};

export const getIsDarkTheme = isDark => (isDark ? DARK_THEME : LIGHT_THEME);

export const FONT_SIZES = {};
export const MAIN_FONT_STYLE = 'https://fonts.googleapis.com/css?family=Montserrat';
export const MIAN_FONT_FAMILY = '\'Montserrat\', sans-serif';
