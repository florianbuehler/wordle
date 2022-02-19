import { useContext } from 'react';
import { GameState, GameStateContext } from 'context/gameStateContext';

export const useGameState = (): GameState => useContext(GameStateContext);
