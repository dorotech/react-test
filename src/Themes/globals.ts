import { createGlobalStyle } from 'styled-components';

type ITHEME_MODE = {
  themeMode: 'DARK' | 'LIGHT';
};

export const GlobalStyles = createGlobalStyle<ITHEME_MODE>`
  *{
    outline:0;
    padding:0;
    margin:0;
    box-sizing:border-box;

    
  }

  body{
    overflow-x: hidden;
    &::-webkit-scrollbar-track {
      background-color: #111;
    }
    &::-webkit-scrollbar {
      width: 1px;
      background: #111;
    }
    &::-webkit-scrollbar-thumb {
      background: #dad7d7;
    }

    background-color: ${({ themeMode, theme }) =>
      themeMode === 'DARK' ? theme.colors.background : 'white'};
  }

`;
