import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { ThemeName } from 'styles';

type Props = {
  theme: ThemeName;
  onThemeToggled: () => void;
};

const StyledControlPanel = styled.aside`
  position: absolute;
  top: 25px;
  right: 25px;

  display: flex;
  align-items: center;

  > div {
    cursor: pointer;
  }
`;

export const ControlPanel: React.FC<Props> = ({ theme, onThemeToggled }) => {
  return (
    <StyledControlPanel>
      <div onClick={onThemeToggled}>
        {theme === 'lightTheme' ? (
          <Icon name="sun" color="yellow" size="large" />
        ) : (
          <Icon name="moon" color="yellow" size="large" />
        )}
      </div>
    </StyledControlPanel>
  );
};
