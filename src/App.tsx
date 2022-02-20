import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';
import { GameState } from 'context/gameStateContext';
import { loadGameState, saveGameState } from 'persistence/gameState';
import { GameStateProvider } from 'components/GameStateProvider';
import { Board } from 'components/Board';

const StyledGame = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 4rem;
  }
`;

const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<string>('');
  const loadedRef = useRef<boolean>(false);

  const secret = 'apple';

  useEffect(() => {
    if (loadedRef.current) {
      return;
    }

    loadedRef.current = true;

    const savedHistory = loadGameState(secret);
    if (savedHistory) {
      setHistory(savedHistory);
    }
  });

  useEffect(() => {
    saveGameState(secret, history);
  }, [history]);

  const gameState: GameState = {
    currentAttempt: currentAttempt,
    history: history,
    secret: secret,
    onCurrentAttemptChanged: (newCurrentAttempt) => setCurrentAttempt(newCurrentAttempt),
    onHistoryChanged: (newHistory) => setHistory(newHistory)
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameStateProvider gameState={gameState}>
        <StyledGame>
          <h1>Wordle</h1>
          <Board loadedFromHistory={loadedRef.current} />
        </StyledGame>
      </GameStateProvider>
    </ThemeProvider>
  );
};

export default App;
