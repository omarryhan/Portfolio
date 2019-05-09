import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { getIsDarkTheme, COLOR_PALETTE } from '../../constants';

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

const GlobalStyles = ({ isDark }) => (
  <StyledGlobalStyle
    colorTheme={getIsDarkTheme(isDark)}
    colorPalette={COLOR_PALETTE}
  />
);

GlobalStyles.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isDark: state.theme.isDark,
}))(GlobalStyles);
