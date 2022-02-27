import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 0 1.5rem;
  justify-content: space-between;

  > a,
  p {
    margin: 0;
    color: ${({ theme }) => theme.primary};
    flex: 1 1 0;
  }

  #footer-copyright {
    text-align: center;
  }

  #footer-for-lelala {
    text-align: right;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/florianbuehler/wordle/">
        <Icon name="github" />
        GitHub
      </a>
      <p id="footer-copyright">&copy; Florian Bühler</p>
      <p id="footer-for-lelala">for lelala &#9825;</p>
    </StyledFooter>
  );
};
