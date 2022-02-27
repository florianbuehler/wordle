import React from 'react';
import styled from 'styled-components';
import { useGameState } from 'hooks/useGameState';
import { Attempt } from './Attempt';

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 45px);
  grid-template-columns: repeat(5, 45px);
  grid-gap: 8px;

  @media (min-width: 768px) {
    grid-template-rows: repeat(6, 60px);
    grid-template-columns: repeat(5, 60px);
  }
`;

export const WordGrid: React.FC = () => {
  const { currentAttempt, history, secret } = useGameState();
  const rows = [];

  for (let i = 0; i < 6; i++) {
    if (i < history.length) {
      rows.push(<Attempt key={i} attempt={history[i]} secret={secret} isFinished={true} />);
    } else if (i === history.length) {
      rows.push(<Attempt key={i} attempt={currentAttempt} secret={secret} isFinished={false} />);
    } else {
      rows.push(<Attempt key={i} attempt="" secret={secret} isFinished={false} />);
    }
  }

  return <StyledBoard>{rows}</StyledBoard>;
};
