import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    background: #111;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
