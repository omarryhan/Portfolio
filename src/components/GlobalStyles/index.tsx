import React from 'react';

import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { getIsDarkTheme } from '../../constants/index';
import { RootStateType } from '../../reducers/types';


interface StyledGlobalStylePropsI {
  colorTheme: {
    color: string;
    backgroundColor: string;
    scrollbarHandleColor: string;
  };
}

const StyledGlobalStyle = createGlobalStyle<StyledGlobalStylePropsI>`
  * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-family: Raleway,Montserrat;
    }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html body {
      max-width: 100%;
      color: ${(props: StyledGlobalStylePropsI): string => props.colorTheme.color};
      background-color: ${(props: StyledGlobalStylePropsI): string => props.colorTheme.backgroundColor};
      overflow: auto;
      margin: 0;
      padding: 0;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
      width: 0.5vw;
  }
  ::-webkit-scrollbar-track {
      box-shadow: gray; 
  }
  ::-webkit-scrollbar-thumb {
      background: ${(props: StyledGlobalStylePropsI): string => props.colorTheme.scrollbarHandleColor}; 
  }
`;

interface GlobalStylesPropsI {
  isDark?: boolean;
  children: React.ReactNode | undefined;
}

const GlobalStyles: React.FC<GlobalStylesPropsI> = ({ isDark, children }): JSX.Element => (
  <>
    <StyledGlobalStyle
      colorTheme={getIsDarkTheme(isDark)}
    />
    {children}
  </>
);

type MapStateToPropsType = {
  isDark: boolean;
}

export default connect(
  (state: RootStateType): MapStateToPropsType => ({
    isDark: state.theme.isDark,
  }),
)(GlobalStyles);
