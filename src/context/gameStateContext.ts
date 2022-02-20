import { createContext } from 'react';

export type GameState = {
  currentAttempt: string;
  history: string[];
  secret: string;
  onCurrentAttemptChanged: (newCurrentAttempt: string) => void;
  onHistoryChanged: (newHistory: string[]) => void;
};

export const GameStateContext = createContext<GameState>({
  currentAttempt: '',
  history: [],
  secret: '',
  onCurrentAttemptChanged: () => null,
  onHistoryChanged: () => null
});
