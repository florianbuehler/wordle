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
  position: sticky;
  top: 0;
  z-index: 999;
  height: 5rem;
  margin-bottom: 5rem;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    margin: 0 25%;
    color: ${({ theme }) => theme.primary};
    border-bottom: ${({ theme }) => `2px solid ${theme.primary}`};
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
