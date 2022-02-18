import { createContext } from 'react';

export type Wordle = {
  currentAttempt: string;
  history: string[];
  secret: string;
};

export const WordleContext = createContext<Wordle>({
  currentAttempt: '',
  history: [],
  secret: ''
});
