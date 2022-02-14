import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
