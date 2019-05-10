import React from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { getIsDarkTheme, COLOR_PALETTE } from '../../constants/index';


interface IStyledGlobalStyle {
  colorTheme: {
    color: string,
    backgroundColor: string,
    scrollbarHandleColor: string,
  };
};

const StyledGlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html body {
        /* font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
        font-family: Raleway;
        max-width: 100%;
        color: ${props => props.colorTheme.color};
        background-color: ${props => props.colorTheme.backgroundColor};
        overflow: auto;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 0.5vw;
    }
    ::-webkit-scrollbar-track {
        box-shadow: gray; 
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.colorTheme.scrollbarHandleColor}; 
    }
`;

const GlobalStyles = ({ isDark }: IGlobalStyles) => (
  <StyledGlobalStyle
    colorTheme={getIsDarkTheme(isDark)}
    colorPalette={COLOR_PALETTE}
  />
);

interface IGlobalStyles {
  isDark: boolean;
};

export default connect(state => ({
  isDark: state.theme.isDark,
}))(GlobalStyles);
