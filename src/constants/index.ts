import { generateMedia } from 'styled-media-query';


export const COLOR_PALETTE = Object.freeze({
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
    off: 'rgba(248, 248, 245, 1)',
    dark: 'rgba(255, 247, 229, 1)',
  },
  fuschia: {
    primary: 'rgb(235, 71, 126)',
  },
});

type ThemeType = {
  color: string;
  backgroundColor: string;
  scrollbarHandleColor: string;
};

export const LIGHT_THEME = Object.freeze({
  color: COLOR_PALETTE.black.primary,
  backgroundColor: COLOR_PALETTE.white.off,
  scrollbarHandleColor: COLOR_PALETTE.blue.primary,
});

export const DARK_THEME = Object.freeze({
  color: COLOR_PALETTE.white.primary,
  backgroundColor: COLOR_PALETTE.black.primary,
  scrollbarHandleColor: COLOR_PALETTE.white.primary,
});

export const getIsDarkTheme = (isDark: boolean = false): ThemeType => (
  isDark ? DARK_THEME : LIGHT_THEME
);

export const GA_ID = 'UA-139782279-1';

export const BREAKPOINTS = Object.freeze({
  mobileSmall: '20em',
  mobileMedium: '23.438em',
  mobileLarge: '25.875em',
  mobileXLarge: '28.5em',
  tablet: '48em',
  laptop: '68.75em',
  laptopLarge: '90em',
  laptopXLarge: '120em',
  desktop: '160em',
});

export const media = generateMedia(BREAKPOINTS);

export const FONT_SIZES = {
  xxxxxl: `
      font-size: 3em;

      ${media.lessThan('laptop')`
          font-size: 2.15em;
      `};

      ${media.lessThan('tablet')`
          font-size: 1.6em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 1em;
      `};
  `,

  xxxxl: `
      font-size: 2.5em;

      ${media.lessThan('laptop')`
          font-size: 2em;
      `};
  
      ${media.lessThan('tablet')`
          font-size: 1.5em;
      `};
  
      ${media.lessThan('mobileMedium')`
          font-size: 0.9em;
      `};
  `,

  xxxl: `
      font-size: 2.25em;

      ${media.lessThan('laptop')`
          font-size: 1.75em;
      `};
  
      ${media.lessThan('tablet')`
          font-size: 1.55em;
      `};
  
      ${media.lessThan('mobileMedium')`
          font-size: 0.8em;
      `};
  `,

  xxl: `
      font-size: 2em;

      ${media.lessThan('laptop')`
          font-size: 1.5em;
      `};
  
      ${media.lessThan('tablet')`
          font-size: 1.25em;
      `};
  
      ${media.lessThan('mobileMedium')`
          font-size: 0.6em;
      `};
  `,

  xl: `
      font-size: 1.5em;

      ${media.lessThan('laptop')`
          font-size: 1.25em;
      `};

      ${media.lessThan('tablet')`
          font-size: 1em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 0.575em;
      `};
  `,

  lg: `
      font-size: 1.25em;

      ${media.lessThan('laptop')`
          font-size: 1em;
      `};

      ${media.lessThan('tablet')`
          font-size: 0.85em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 0.55em;
      `};
  `,

  md: `
      font-size: 1em;

      ${media.lessThan('laptop')`
          font-size: 0.85em;
      `};

      ${media.lessThan('tablet')`
          font-size: 0.75em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 0.5em;
      `};
  `,

  sm: `
      font-size: 0.85em;

      ${media.lessThan('laptop')`
          font-size: 0.75em;
      `};

      ${media.lessThan('tablet')`
          font-size: 0.65em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 0.45em;
      `};
  `,

  xs: `
      font-size: 0.75em;

      ${media.lessThan('laptop')`
          font-size: 0.65em;
      `};

      ${media.lessThan('tablet')`
          font-size: 0.55em;
      `};

      ${media.lessThan('mobileMedium')`
          font-size: 0.4em;
      `};
  `,
};
