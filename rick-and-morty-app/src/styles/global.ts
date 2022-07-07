import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './themes/index';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background: ${(props: ThemeProps) => props.theme.backgroundColor};
    color: ${(props: ThemeProps) => props.theme.textColor};
  }

  a {
    text-decoration: none;
    color: ${(props: ThemeProps) => props.theme.textColor};
  }

  button {
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 1080px) {
  html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
