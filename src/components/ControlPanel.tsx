import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { ThemeName } from 'styles';

type Props = {
  themeName: ThemeName;
  onReload: () => void;
  onThemeToggled: () => void;
};

const StyledControlPanel = styled.aside`
  position: absolute;
  top: 25px;
  right: 25px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 0.75rem;

  > div {
    cursor: pointer;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const ControlPanel: React.FC<Props> = ({ themeName, onReload, onThemeToggled }) => {
  return (
    <StyledControlPanel>
      <div onClick={onReload}>
        <Icon name="redo" />
      </div>
      <div onClick={onThemeToggled}>{themeName === 'lightTheme' ? <Icon name="moon" /> : <Icon name="sun" />}</div>
    </StyledControlPanel>
  );
};
