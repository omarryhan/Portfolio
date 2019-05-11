import React from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { getIsDarkTheme } from '../../constants/index';
import { RootStateType } from '../../reducers/types';


interface StyledGlobalStyleType {
  colorTheme: {
    color: string;
    backgroundColor: string;
    scrollbarHandleColor: string;
  };
}

const StyledGlobalStyle = createGlobalStyle<StyledGlobalStyleType>`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html body {
        /* font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
        font-family: Raleway;
        max-width: 100%;
        color: ${(props: StyledGlobalStyleType): string => props.colorTheme.color};
        background-color: ${(props: StyledGlobalStyleType): string => props.colorTheme.backgroundColor};
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
        background: ${(props: StyledGlobalStyleType): string => props.colorTheme.scrollbarHandleColor}; 
    }
`;

interface GlobalStylesType {
  isDark: boolean;
}

const GlobalStyles = ({ isDark }: GlobalStylesType): JSX.Element => (
  <StyledGlobalStyle
    colorTheme={getIsDarkTheme(isDark)}
  />
);

export default connect((state: RootStateType): GlobalStylesType => ({
  isDark: state.theme.isDark,
}))(GlobalStyles);
