import { createContext } from 'react';

export type GameState = {
  currentAttempt: string;
  history: string[];
  secret: string;
};

export const GameStateContext = createContext<GameState>({
  currentAttempt: '',
  history: [],
  secret: ''
});
