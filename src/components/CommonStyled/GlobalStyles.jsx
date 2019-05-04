import React from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import {
    getIsDarkTheme,
    MAIN_FONT_STYLE,
    MIAN_FONT_FAMILY,
    COLOR_PALETTE,
} from '../../constants';


const StyledGlobalStyle = createGlobalStyle`
    @import url(${props => props.fontStyle});
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    html body {
        font-family: ${props => props.fontFamily};
        max-width: 100%;
        color: ${props => props.colorTheme.color};
        background-color: ${props => props.colorTheme.backgroundColor};
        overflow: auto;
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 0.5vw;
    }
      
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: gray; 
    }
      
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.colorTheme.scrollbarHandleColor}; 
    }
`;

const GlobalStyles = ({
    isDark,
}) => (
    <StyledGlobalStyle
        colorTheme={getIsDarkTheme(isDark)}
        fontStyle={MAIN_FONT_STYLE}
        fontFamily={MIAN_FONT_FAMILY}
        colorPalette={COLOR_PALETTE}
    />
);

export default connect(
    state => ({
        isDark: state.theme.isDark,
    })
)(GlobalStyles);
