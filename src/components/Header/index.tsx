import React from 'react';
import styled from 'styled-components';
import { ThemeName } from 'styles';
import { Instructions } from './Instructions';
import { ControlPanel } from './ControlPanel';

export type HeaderProps = {
  themeName: ThemeName;
  onReload: () => void;
  onThemeToggled: () => void;
};

const StyledHeader = styled.header`
  height: 4.5rem;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    margin: 0 10%;
    color: ${({ theme }) => theme.primary};
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};

    @media (min-width: 768px) {
      margin: 0 25%;
    }
  }
`;

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <Instructions />
      <h1>Wordle</h1>
      <ControlPanel {...props} />
    </StyledHeader>
  );
};
