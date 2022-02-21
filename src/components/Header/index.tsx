import React from 'react';
import styled from 'styled-components';
import { ThemeName } from 'styles';
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
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.fontColor};

  h1 {
    margin: 0;
  }
`;

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <h1>Wordle</h1>
      <ControlPanel {...props} />
    </StyledHeader>
  );
};
