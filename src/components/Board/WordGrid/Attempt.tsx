import React from 'react';
import { Cell } from './Cell';

type Props = {
  attempt: string;
  secret: string;
  isFinished: boolean;
};

export const Attempt: React.FC<Props> = ({ attempt, secret, isFinished }) => {
  const cells = [];

  for (let i = 0; i < 5; i++) {
    cells.push(<Cell key={i} index={i} attempt={attempt} secret={secret} isAttemptFinished={isFinished} />);
  }

  return <>{cells}</>;
};
