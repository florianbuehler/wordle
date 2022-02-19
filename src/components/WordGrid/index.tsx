import React from 'react';
import styled from 'styled-components';
import { useWordle } from 'hooks/useWordle';
import { Attempt } from './Attempt';

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: repeat(5, 60px);
  grid-gap: 12px;
`;

export const WordGrid: React.FC = () => {
  const { currentAttempt, history, secret } = useWordle();
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
