import React from 'react';
import { GameState, GameStateContext } from 'context/gameStateContext';

type Props = {
  gameState: GameState;
};

export const GameStateProvider: React.FC<Props> = ({ gameState, children }) => {
  if (!children) {
    return null;
  }

  return <GameStateContext.Provider value={gameState}>{children}</GameStateContext.Provider>;
};
