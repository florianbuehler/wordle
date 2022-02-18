import React from 'react';
import { Cell } from './Cell';

type Props = {
  attempt: string;
  secret: string;
  isSolved: boolean;
};

export const Attempt: React.FC<Props> = ({ attempt, secret, isSolved }) => {
  const cells = [];

  for (let i = 0; i < 5; i++) {
    cells.push(<Cell key={i} index={i} attempt={attempt} secret={secret} isSolved={isSolved} />);
  }

  return <>{cells}</>;
};
