import { createContext } from 'react';

export enum PlayerStatus {
  PlayerWon = 'PlayerWon',
  PlayerLost = 'PlayerLost',
  PlayerStillPlaying = 'PlayerStillPlaying'
}

export type GameState = {
  playerStatus: PlayerStatus;
  currentAttempt: string;
  history: string[];
  secret: string;
  onPlayerStatusChanged: (newPlayerStatus: PlayerStatus) => void;
  onCurrentAttemptChanged: (newCurrentAttempt: string) => void;
  onHistoryChanged: (newHistory: string[]) => void;
};

export const GameStateContext = createContext<GameState>({
  playerStatus: PlayerStatus.PlayerStillPlaying,
  currentAttempt: '',
  history: [],
  secret: '',

  onPlayerStatusChanged: () => null,
  onCurrentAttemptChanged: () => null,
  onHistoryChanged: () => null
});
