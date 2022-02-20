import React, { useEffect, useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyles, ThemeName } from 'styles';
import { GameState } from 'context/gameStateContext';
import { loadGameState, saveGameState } from 'persistence/gameState';
import { GameStateProvider } from 'components/GameStateProvider';
import { Title } from 'components/Title';
import { Board } from 'components/Board';
import { ControlPanel } from './components/ControlPanel';

const StyledGame = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('darkTheme');
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

  const toggleTheme = (): void => {
    switch (theme) {
      case 'lightTheme':
        setTheme('darkTheme');
        break;
      case 'darkTheme':
        setTheme('lightTheme');
        break;
      default:
        throw Error(`Theme "${theme}" is not a valid theme.`);
    }
  };

  const gameState: GameState = {
    currentAttempt: currentAttempt,
    history: history,
    secret: secret,
    onCurrentAttemptChanged: (newCurrentAttempt) => setCurrentAttempt(newCurrentAttempt),
    onHistoryChanged: (newHistory) => setHistory(newHistory)
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <GameStateProvider gameState={gameState}>
        <StyledGame>
          <Title>Wordle</Title>
          <ControlPanel theme={theme} onThemeToggled={toggleTheme} />
          <Board loadedFromHistory={loadedRef.current} />
        </StyledGame>
      </GameStateProvider>
    </ThemeProvider>
  );
};

export default App;
