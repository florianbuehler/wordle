import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { HeaderProps } from './index';

const StyledControlPanel = styled.aside`
  position: absolute;
  top: 28px;
  right: 20px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 0.75rem;

  @media (min-width: 768px) {
    top: 20px;
  }

  > i {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const ControlPanel: React.FC<HeaderProps> = ({ themeName, onReload, onThemeToggled }) => {
  return (
    <StyledControlPanel>
      <Icon name="redo" onClick={onReload} />
      {themeName === 'lightTheme' ? (
        <Icon name="moon" onClick={onThemeToggled} />
      ) : (
        <Icon name="sun" onClick={onThemeToggled} />
      )}
    </StyledControlPanel>
  );
};
