export const COLOR_PALETTE = {
  blue: {
    lightAlt: 'rgb(97, 184, 196)',
    lightAlt2: 'rgb(2, 137, 140)',
    light: '#005E7C',
    primary: '#001242',
    dark: '#000022',
  },
  black: {
    primary: 'rgb(28, 27, 32)',
  },
  white: {
    primary: '#fff',
  },
  fuschia: {
    primary: 'rgb(235, 71, 126)',
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

export const GA_ID = 'UA-139782279-1';
