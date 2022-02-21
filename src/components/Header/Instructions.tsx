import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledInstructions = styled.aside`
  position: absolute;
  top: 20px;
  left: 20px;

  > div {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const Instructions: React.FC = () => {
  return (
    <StyledInstructions>
      <div>
        <Icon name="info" />
      </div>
    </StyledInstructions>
  );
};
