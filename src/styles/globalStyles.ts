import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// library css files
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    background: ${({ theme }) => theme.bgColor};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
