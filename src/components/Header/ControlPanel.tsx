import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { HeaderProps } from './index';

const StyledControlPanel = styled.aside`
  position: absolute;
  top: 20px;
  right: 20px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 0.75rem;

  > div {
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const ControlPanel: React.FC<HeaderProps> = ({ themeName, onReload, onThemeToggled }) => {
  return (
    <StyledControlPanel>
      <div onClick={onReload}>
        <Icon name="redo" />
      </div>
      <div onClick={onThemeToggled}>{themeName === 'lightTheme' ? <Icon name="moon" /> : <Icon name="sun" />}</div>
    </StyledControlPanel>
  );
};
