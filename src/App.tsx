import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyles, ThemeName } from 'styles';
import { GameState, PlayerStatus } from 'context/gameStateContext';
import { loadGameState, saveGameState } from 'persistence/gameState';
import { GameStateProvider } from 'components/GameStateProvider';
import { Header } from 'components/Header';
import { Board } from 'components/Board';
import { Footer } from 'components/Footer';
import { WinModal } from 'components/WinModal';
import { LossModal } from 'components/LossModal';

const GameLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-columns: auto;
  grid-gap: 3rem;
  align-items: center;
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('darkTheme');
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(PlayerStatus.PlayerStillPlaying);
  const [secret, setSecret] = useState<string>('apple');
  const [history, setHistory] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<string>('');
  const loadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (loadedRef.current) {
      return;
    }

    loadedRef.current = true;

    const savedHistory = loadGameState(secret);

    // if the last element in the loaded history matches the secret, the player already won
    if (savedHistory && savedHistory[savedHistory.length - 1] === secret) {
      setHistory([]);
      return;
    }

    // if the loaded history contains 6 elements, the player already lost
    if (savedHistory?.length === 6) {
      setHistory([]);
      return;
    }

    if (savedHistory) {
      setHistory(savedHistory);
    }
  });

  useEffect(() => {
    saveGameState(secret, history);
  }, [secret, history]);

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

  const resetGame = (): void => {
    setSecret('apple'); // TODO get a new secret
    setHistory([]);
    setPlayerStatus(PlayerStatus.PlayerStillPlaying);
  };

  const gameState: GameState = {
    playerStatus: playerStatus,
    currentAttempt: currentAttempt,
    history: history,
    secret: secret,
    onPlayerStatusChanged: (newPlayerStatus) => setPlayerStatus(newPlayerStatus),
    onCurrentAttemptChanged: (newCurrentAttempt) => setCurrentAttempt(newCurrentAttempt),
    onHistoryChanged: (newHistory) => setHistory(newHistory)
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <GameStateProvider gameState={gameState}>
        <GameLayout>
          <Header themeName={theme} onReload={resetGame} onThemeToggled={toggleTheme} />
          {/*<StyledGame>*/}
          <Board loadedFromHistory={loadedRef.current} />
          {/*</StyledGame>*/}
          <Footer />
        </GameLayout>
        <WinModal onPlayAgain={resetGame} />
        <LossModal onTryAgain={resetGame} />
      </GameStateProvider>
    </ThemeProvider>
  );
};

export default App;
