import React from 'react';
import { Wordle, WordleContext } from 'context/wordleContext';

type Props = {
  wordle: Wordle;
};

export const WordleProvider: React.FC<Props> = ({ wordle, children }) => {
  if (!children) {
    return null;
  }

  return <WordleContext.Provider value={wordle}>{children}</WordleContext.Provider>;
};
