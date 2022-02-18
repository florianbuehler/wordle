import React from 'react';
import styled from 'styled-components';
import { Attempt } from './Attempt';

type Props = {
  history: string[];
  currentAttempt: string;
  secret: string;
};

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-template-columns: repeat(5, 60px);
  grid-gap: 12px;
`;

export const Board: React.FC<Props> = ({ history, currentAttempt, secret }) => {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    if (i < history.length) {
      rows.push(<Attempt key={i} attempt={history[i]} secret={secret} isSolved={true} />);
    } else if (i === history.length) {
      rows.push(<Attempt key={i} attempt={currentAttempt} secret={secret} isSolved={false} />);
    } else {
      rows.push(<Attempt key={i} attempt="" secret={secret} isSolved={false} />);
    }
  }

  return <StyledBoard>{rows}</StyledBoard>;
};
